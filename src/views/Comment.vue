<template>
  <div class="wrapper">
    <nav-button buttonText="Back to Comments" whereToGo="/comments" class="backToComments"/>
    <h1 class="commentTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
    <p class="commentBody">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
      </br></br>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature, making it over 2000 years old. Richard McClintock, a Latin professor at </br>Hampden-Sydney College in
      Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
      through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
      sections of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
      is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
      ipsum dolor sit amet..", comes from a line in section.
    </p>
    <div class="separator"></div>
    <back-to-home/>
  </div>
</template>

<script>
  import BackToHome from '@/components/BackToHome';
  import NavButton from '../components/NavButton';

  export default {
    name: 'comment',
    components: { NavButton, BackToHome },
  };
</script>

<style scoped>
  .wrapper {
    margin: 68px 300px 0;
  }

  .commentTitle {
    color: #101417;
    font-family: 'sofia_probold','sans-serif';
    font-size: 48px;
    line-height: 58px;
    margin: 27px 0 40px;
  }
  .commentBody{
    color: #101417;
    font-family: 'sofia_proregular','sans-serif';
    font-size: 16px;
    line-height: 28px;
  }
  .separator{
    border-top: 1px solid #4a4d5e;
    opacity: 0.1;
    margin: 92px 0 15px;
  }
  .backToComments{
    text-decoration: underline;
    border: none;
    text-align: left;
  }
</style>
