<template>
  <footer class="footer">
    <nav>
      <ul>
        <li><a href="https://www.creative-tim.com">Creative Tim</a></li>
        <li><a href="https://creative-tim.com/presentation"> About Us </a></li>
        <li><a href="http://blog.creative-tim.com"> Blog </a></li>
        <li><a href="https://www.creative-tim.com/license"> Licenses </a></li>
      </ul>
    </nav>
    <div class="copyright text-center">
      © 2021 <a
        href="https://www.creative-tim.com/?ref=mdf-vuejs"
        target="_blank"
      >Creative Tim</a>, made with <i class="fa fa-heart heart" /> for
      a better web
    </div>
  </footer>
</template>

<script>


export default {
  name: 'TheFooter',
  components: {
    
  }
};
</script>

<style lang="scss" scoped>
  nav{
    display: inline-block;
    font-size: 14px;
  }
  a:hover{
    color: #9c27b0;
  }
</style>
