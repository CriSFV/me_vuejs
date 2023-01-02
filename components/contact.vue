<template>
  <div>
    <section class="GoBack_container mt-2"><GoBack /></section>
    <section class="continer">
      <form
        action="https://formspree.io/f/mleayywn"
        method="POST"
        id="contact"
        class="form_continer"
      >
        <label for="name"
          >Nombre:
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Indica tu nombre"
            required
        /></label>
        <label for="lastname"
          >Apellido:
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Indica tu nombre"
        /></label>
        <label for="email" class="email"
          >Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Indica tu email"
            required
        /></label>
        <label for="message" class="message"
          >Mensaje:
          <textarea name="message" id="message" cols="50" rows="5"></textarea>
        </label>
        <input type="submit" class="secondary-btn form_btn" value="Enviar" />
      </form>
      <section class="contact_icons">
        <h6>También me puedes encontrar en:</h6>
        <ul class="contact__list">
          <li class="contact__list__item">
            <a
              href="mailto: crisfvalverde@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i class="far fa-envelope"></i>
            </a>
          </li>
          <li class="contact__list__item">
            <a
              href="https://github.com/CriSFV"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github" title="Go to my Github"></i>
            </a>
          </li>
          <li class="contact__list__item">
            <a
              href="https://www.linkedin.com/in/crisfvalverde/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin-in" title="Go to my LinkedIn"></i>
            </a>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    GoBack: () => import('@/components/Navigation/goback'),
  },
}
</script>

<style lang="sass">
.continer
    border: 1px solid grey
    padding: 10px
    border-radius: 5px
    width: fit-content
    margin: auto
.form_continer
    height: 80vh
    max-width: 600px
    margin: auto
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 2%
input
    width: 100%
    border-radius: 5px
    border: 1px solid grey
input::placeholder
    font-style: italic
    font-size: 12px
    text-align: center
.email
    grid-column: 1/3
    input
        width: 100%
.message
    grid-column: 1/3
.contact_icons
    grid-column: 1/3
.form_btn
    grid-column: 2/3
.contact__list
    list-style-type: none
    display: flex
    &__item
        font-size: 18px
        border: 3px solid #202234
        border-radius: 5px
        background-color: #202234
        display: inline-block
        margin: 4px
        width: 30px
        height: 30px
        text-align: center
        a
            color: white
        &:hover
            background-color: white
            a
                color: #202234
</style>