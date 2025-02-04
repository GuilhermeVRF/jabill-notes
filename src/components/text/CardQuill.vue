<template>
  <div :class="$style.editor_container">
    <div ref="toolbar" :class="$style.toolbar">
      <select id="heading">
        <option disabled selected>Título</option>
        <option>Normal</option>
        <option @click="formatText('heading', 'h1')">Título 1</option>
        <option @click="formatText('heading', 'h2')">Título 2</option>
        <option @click="formatText('heading', 'h3')">Título 3</option>
      </select>

      <select id="font_size">
        <option disabled selected>Tamanho da Fonte</option>
        <option @click="formatText('font-size', '16px')">Normal</option>
        <option @click="formatText('font-size', '14px')">14px</option>
        <option @click="formatText('font-size', '16px')">16px</option>
        <option @click="formatText('font-size', '18px')">18px</option>
      </select>
      <button @click="formatText('bold')"><b>B</b></button>
      <button @click="formatText('italic')"><i>I</i></button>
      <button @click="formatText('underline')"><u>U</u></button>
      <button @click="formatText('strike')">S</button>
      <button @click="formatText('list', 'ordered')">1.</button>
      <button @click="formatText('list', 'bullet')">•</button>
      <!--<button @click="formatText('link')">🔗</button>
      <button @click="formatText('align', 'left')">🡄</button>
      <button @click="formatText('align', 'center')">⏺</button>
      <button @click="formatText('align', 'right')">🡆</button>-->
    </div>
    <div ref="editor" contenteditable="true" :class="$style.editor" @mouseup="saveSelection" @keyup="saveSelection">
      ></div>
  </div>
</template>

<script>
import styles from "./CardQuill.module.css";
import { createPageInServer } from "../pagesList/CardPagesList";
import deleteIcon from "@/assets/trash.png";

export default {
  name: "CardEditor",
  emits: ['text-change'],
  data() {
    return {
      selection: null
    }
  },
  props: {
    content: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$refs.editor.innerHTML = this.content;

    this.$refs.editor.addEventListener('input', () => {
      this.$emit("text-change", this.$refs.editor.innerHTML);
    });

    document.querySelectorAll('.deletePageLink').forEach(btn => {
      btn.addEventListener('click', (event) => {
        const linkContainer = event.target.parentElement.parentElement || null;
        if(linkContainer){
          event.target.parentElement.parentElement.remove();

          // Emite o evento para atualizar o editor
          this.$emit("text-change", this.$refs.editor.innerHTML);
        }
      });
    });

  },
  watch: {
    content(newContent) {
      if (newContent !== this.$refs.editor.innerHTML) {
        this.$refs.editor.innerHTML = newContent;
      }
    }
  },
  methods: {
    saveSelection() {
      // Captura a seleção do usuário
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        this.selection = selection.getRangeAt(0);
      }
    },
    async formatText(styleType, value = null) {
      if (!this.selection) return;

      const selectedText = this.selection.toString();
      if (selectedText.length === 0) return;

      let span = null;
      switch (styleType) {
        case 'bold':
          span = this.applyStyle('fontWeight', 'bold');
          break;
        case 'italic':
          span = this.applyStyle('fontStyle', 'italic');
          break;
        case 'underline':
          span = this.applyStyle('textDecoration', 'underline');
          break;
        case 'strike':
          span = this.applyStyle('textDecoration', 'line-through');
          break;
        case 'list':
          this.createList(value, selectedText);
          break;
        case 'heading':
          this.createHeading(value, selectedText);
          break;
        case 'font-size':
          this.applyStyle('fontSize', value);
          break;
        case 'link':
          this.createLink(selectedText);
          break;
        default:
          break;
      }

      // Se nenhuma formatação específica for aplicada, cria um span com o texto selecionado
      if (span) this.createSpan(span, selectedText);
    },

    // Função auxiliar para aplicar estilos diretamente
    applyStyle(styleProperty, styleValue) {
      const span = document.createElement("span");
      span.style[styleProperty] = styleValue;
      console.log(span.style[styleProperty])
      this.insertNodeAtSelection(span);
      return span;
    },

    // Função para criar listas (ordenadas ou com marcadores)
    createList(value, selectedText) {
      const listElement = document.createElement(value === 'ordered' ? 'ol' : 'ul');
      const listItem = document.createElement('li');
      listItem.textContent = selectedText;
      listElement.appendChild(listItem);
      this.insertNodeAtSelection(listElement);
    },

    // Função para criar títulos (como <h1>, <h2>, etc.)
    createHeading(value, selectedText) {
      const heading = document.createElement(value);
      heading.textContent = selectedText;
      this.insertNodeAtSelection(heading);
    },

    // Função para criar links
    async createLink(selectedText) {
      const linkContainer = document.createElement('div');
      linkContainer.classList.add(this.$style.link_container);

      const link = document.createElement('a');
      const response = await createPageInServer(selectedText);

      link.href = `http://localhost:8080/content/${response.slug}`;
      link.textContent = `🔗 ${selectedText}`;

      const deleteLinkBtn = document.createElement('button');
      deleteLinkBtn.classList.add('deletePageLink');
      deleteLinkBtn.addEventListener('click', () => {
        linkContainer.remove();
        this.$emit("text-change", this.$refs.editor.innerHTML);
      })
      const deleteLinkBtnIcon = document.createElement('img');
      
      deleteLinkBtnIcon.src = deleteIcon;

      linkContainer.appendChild(link);
      deleteLinkBtn.appendChild(deleteLinkBtnIcon);
      linkContainer.appendChild(deleteLinkBtn);

      this.insertNodeAtSelection(linkContainer);
      this.$refs.editor.appendChild(document.createElement('br'));
    },

    // Função para criar um <span> com o texto selecionado
    createSpan(span, selectedText) {
      span.textContent = selectedText;
      this.insertNodeAtSelection(span);
    },

    // Função para inserir o nó na posição da seleção
    insertNodeAtSelection(node) {
      if (!this.selection) return;

      // Obtém o range da seleção atual
      const range = this.selection;
      range.deleteContents(); // Remove o texto selecionado e substitui pelo novo nó

      // Insere o novo elemento formatado
      range.insertNode(node);

      // Cria um novo range para posicionar o cursor depois do elemento inserido
      const newRange = document.createRange();
      newRange.setStartAfter(node); // Coloca o cursor depois do elemento
      newRange.collapse(true); // Move o cursor para a nova posição

      // Atualiza a seleção do usuário
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(newRange);

      // Atualiza o editor emitindo a mudança
      this.$emit("text-change", this.$refs.editor.innerHTML);
    }

  },
  computed: {
    $style() {
      return styles;
    }
  }
}
</script>