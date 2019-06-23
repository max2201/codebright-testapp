
<template>
  <div class="wrapper">

    <div class="firstScreen">
      <h1 class="mainTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
      <img src="@/assets/Layer131.png" alt="mainImg" class="image">
    </div>


    <div class="whatWeDo" id="aboutUs">

      <div class="whatWeDoBlock">
        <img src="@/assets/Vector_Smart_Object11.png" alt="Who we are"/>
        <h3 class="heading">Who we are</h3>
        <ul class="list">
          <li class="list-item">• It is a long established fact that a reader will be distracted</li>
          <li class="list-item">• The readable content of a page when looking at its layout</li>
          <li class="list-item">• The point of using Lorem Ipsum</li>
          <li class="list-item">• As opposed to using Content here, content here.</li>
        </ul>
      </div>

      <div class="whatWeDoBlock">
        <img src="@/assets/Vector_Smart_Object.png" alt="What we do"/>
        <h3 class="heading">What we do</h3>
        <ul class="list">
          <li class="list-item">• Many desktop publishing packages and web page</li>
          <li class="list-item">• There are many variations of passages of Lorem Ipsum available, but the majority have</li>
          <li class="list-item">• Various versions have evolved over the years, sometimes by accident</li>
        </ul>
      </div>

      <div class="whatWeDoBlock">
        <img src="@/assets/Vector_Smart_Object6.png" alt="Technology"/>
        <h3 class="heading">Technology</h3>
        <ul class="list">
          <li class="list-item">• The point of using Lorem Ipsum</li>
          <li class="list-item">• As opposed to using Content here, content here</li>
          <li class="list-item">• Contrary to popular belief, Lorem Ipsum is not simply random text</li>
          <li class="list-item">• A Latin professor at Hampden-Sydney College in Virginia</li>
        </ul>
      </div>
    </div>


    <div class="commentWrap" id="writeComment">

      <div class="writeComment">
        <div class="title">
          <h2 class="commentHeading">Write<br/>comment</h2>
          <div class="yellowLine"></div>
        </div>

<!--todo: сделать валидацию формы-->

        <form class="commentForm">
          <input type="text" class="textField" placeholder="Title" v-model="commentTitle" maxlength="256" name="name" data-name="Name" id="name" required/>
          <textarea class="textArea" placeholder="Your comment" v-model="commentBody" maxlength="5000" required></textarea>
          <button type="submit" class="submitButton" @click.prevent="sendComment">Send</button>
        </form>
      </div>
      <Header/>
      <div class="separator"></div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      commentTitle: '',
      commentBody: '',
    };
  },
  methods: {
    sendComment() {
      this.$store.dispatch('sendComment', { body: this.commentBody, title: this.commentTitle });
      this.commentTitle = '';
      this.commentBody = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .firstScreen {
    margin-top: 49px;
  }
  .mainTitle {
    width: 900px;
    margin-top: 76px;
    margin-bottom: 76px;
    margin-left: 180px;
    font-family: Poppins, sans-serif;
    font-size: 60px;
    line-height: 72px;
    font-weight: 600;
    letter-spacing: 2.2px;
  }
  .image {
    width: 100%;
  }
  .whatWeDo {
    display: flex;
    width: 1001px;
    padding: 105px 0 114px;
    justify-content: space-between;
    margin: 0 auto;
  }
  .whatWeDoBlock {
    width: 255px;
    align-self: baseline;
  }
  .heading {
    font-family: Poppins, sans-serif;
    color: #101417;
    font-size: 32px;
    line-height: 80px;
    font-weight: 700;
  }
  .list {
    list-style-type: none;
  }
  .list-item {
    font-family: Poppins, sans-serif;
    color: #101417;
    font-size: 16px;
    letter-spacing: 0.7px;
    line-height: 19px;
  }
  .commentWrap {
    background-color: #1d1e25;
  }
  .writeComment {
    display: flex;
    padding: 140px 180px;
    justify-content: space-between;
  }
  .commentHeading {
    margin-bottom: 31px;
    font-family: Poppins, sans-serif;
    color: #fff;
    font-size: 48px;
    line-height: 50px;
  }
  .yellowLine {
    width: 70px;
    height: 5px;
    background-color: #f9d10d;
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
  .separator {
    margin: 5px 50px 0;
    border-top: 1px solid #4a4d5e;
    opacity: 0.3;
  }

</style>
