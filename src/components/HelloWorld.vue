<template>
  <div class="hello">
    <p>
      <a href="https://vk.com/nasty_demi" target="_blank" rel="noopener"
        >Добро пожаловать</a
      >
    </p>

    <h3>Картиночки</h3>
    <ul>
      <li>
        <a
          href="https://bipbap.ru/wp-content/uploads/2019/08/prost-kart-dlya-n-1-1-640x464.jpg"
          target="_blank"
          rel="noopener"
          >одна картиночка</a
        >
      </li>
      <li>
        <a
          href="https://i.pinimg.com/originals/e9/d7/90/e9d7906af46fc0b758b4ca31e5d899da.jpg"
          target="_blank"
          rel="noopener"
          >другая картиночка</a
        >
      </li>
    </ul>

    <h3>Страницы</h3>
    <ul>
      <li>
        <router-link to="/one">Перейти к One</router-link>
      </li>
      <li>
        <router-link to="/two">Перейти к Two</router-link>
      </li>
      <li>
        <router-link to="/">На главную</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
