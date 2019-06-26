<template>
  <transition name="modal">
    <div class="modal-mask">
        <div class="modal-container">

          <div class="modal-header">Change comment</div>

          <form class="commentForm">
            <div></div>
            <input type="text" class="textField"  v-model="editingCommentLocal.title" maxlength="256" name="name" data-name="Name" id="name" required/>
            <textarea class="textArea" v-model="editingCommentLocal.body" maxlength="5000" required></textarea>
            <button type="submit" class="submitButton"  @click.prevent="updateComment(editingCommentLocal), $emit('close')">Ok</button>
          </form>
        </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        editingCommentLocal: { ...this.editingComment },
      };
    },
    name: 'Modal',
    props: ['editingComment'],
    methods: {
      updateComment(id) {
        this.$store.dispatch('updateComment', id);
      },
    },
  };
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity .3s ease;
  }
  .modal-container {
    max-height: 100vh;
    padding: 20px 30px;
    background-color: #1d1e25;
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  .modal-header {
    margin-bottom: 15px;
    text-align: center;
    font-size: 20px;
    color: #60e3a1;
  }
  .commentForm {
    width: 592px;
    display: flex;
    flex-direction: column;
  }
  .textField {
    height: 55px;
    padding: 20px;
    border: solid 1px #60e3a1;
    border-radius: 3px;
    background-color: transparent;
    font-family: Poppins, sans-serif;
    color: #60e3a1;
    font-size: 15px;
  }
  .textField::placeholder {
    font-family: Poppins, sans-serif;
    color: #60e3a1;
    font-size: 15px;
  }
  .textArea {
    max-height: 70vh;
    padding: 13px 20px;
    margin: 16px 0 15px;
    border: solid 1px #60e3a1;
    border-radius: 3px;
    background-color: transparent;
    min-height: 150px;
    resize: vertical;
    font-family: Poppins, sans-serif;
    color: #60e3a1;
    font-size: 15px;
  }
  .textArea::placeholder {
    font-family: Poppins, sans-serif;
    color: #60e3a1;
    font-size: 15px;
  }
  .submitButton {
    width: 150px;
    height: 55px;
    border-radius: 3px;
    border: none;
    background-color: #60e3a1;
    font-family: Poppins, sans-serif;
    color: #1d1e25;
    font-size: 14px;
    padding-top: 3px;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
