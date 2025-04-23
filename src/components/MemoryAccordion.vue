<!-- MemoryAccordion.vue -->
<template>
    <div class="memory-container">
      <div class="accordion">
        <div 
          v-for="(memory, index) in memories" 
          :key="memory.title" 
          class="accordion-item"
        >
          <div 
            class="accordion-trigger" 
            @click="toggleItem(memory.title)"
            :class="{ 'active': openItem === memory.title }"
          >
            <div class="trigger-content">
              <div class="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="quote-icon">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              {{ memory.title }}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon" :class="{ 'rotate': openItem === memory.title }">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <transition name="accordion">
            <div v-if="openItem === memory.title" class="accordion-content">
              <div class="content-wrapper">
                <blockquote>
                  {{ memory.content }}
                </blockquote>
                <div class="author-info">
                  <p class="author-name">— {{ memory.author }}</p>
                  <p class="source">{{ memory.source }}</p>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MemoryAccordion',
    props: {
      memories: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        openItem: null
      }
    },
    methods: {
      toggleItem(title) {
        if (this.openItem === title) {
          this.openItem = null;
        } else {
          this.openItem = title;
        }
      }
    }
  }
  </script>
  
  <style>
  .memory-container {
    margin: 0 auto;
    width: min(100%, 64rem);
  }
  
  .accordion {
    width: 100%;
  }
  
  .accordion-item {
    border-bottom: 1px solid #e5e7eb;
  }
  
  .accordion-item:last-child {
    border-bottom: none;
  }
  
  .accordion-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0;
    font-size: var(--font_l);
    font-weight: 500;
    color: #1f2759;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .accordion-trigger:hover {
    text-decoration: none;
  }
  
  .trigger-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .icon-container {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #efbe1d, #ea3e93);
  }
  
  .quote-icon {
    width: 1rem;
    height: 1rem;
    color: white;
  }
  
  .chevron-icon {
    width: 1rem;
    height: 1rem;
    transition: transform 0.2s ease;
  }
  
  .chevron-icon.rotate {
    transform: rotate(180deg);
  }
  
  .accordion-content {
    overflow: hidden;
    padding-bottom: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .content-wrapper {
    padding-left: 3rem;
    border-left: 2px solid #ea3e93;
  }
  
  blockquote {
    font-style: italic;
    margin-bottom: 1rem;
    font-size: var(--font_s);
  }
  
  .author-info {
    text-align: right;
  }
  
  .author-name {
    color: #1f2759;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .source {
    font-size: 0.875rem;
    color: #4b5563;
  }
  
  /* Transition animations */
  .accordion-enter-active,
  .accordion-leave-active {
    transition: all 0.3s ease;
    max-height: 300px;
  }
  
  .accordion-enter-from,
  .accordion-leave-to {
    max-height: 0;
    opacity: 0;
  }
  </style>