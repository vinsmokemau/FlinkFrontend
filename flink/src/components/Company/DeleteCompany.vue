<template lang="html">
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="/">Companies</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    
    <div class="container">
      
      <div class="row">
        <div class="col text-left">
          <h2>Eliminar Compañía</h2>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">

              <h3>Al eliminarse la compañía sólo se podrá recuperar vía administrador. ¿Está seguro?</h3>
              
              <form @submit="onSubmit">

                <div class="rows">
                  <div class="col text-left">
                    <b-button type="submit" variant="danger">Eliminar</b-button>
                    <b-button variant="primary" :to="{name: 'ListCompanies'}">Cancelar</b-button>
                  </div>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
  data () {
    return {
      company: this.$route.params.companyId,
      form: {
        is_active: false,
      },
    }
  },
  methods: {
    getCompany () {
      const path = `http://localhost:8000/companies/${this.company}/`
      axios.get(path).then((response) => {
        this.form.status = response.data.status
      })
      .catch((error) => {
        console.log(this.form)
      })
    },
    onSubmit (evt) {
      evt.preventDefault()
      
      const path = `http://localhost:8000/companies/${this.company}/change_status/`
      
      axios.patch(path, this.form).then((response) => {
        this.form.status = response.data.status
        swal("Delete succesfull!", "", "success")
      })
      .catch((error) => {
        console.log(error)
        swal("Ooops!", "A problem ocurrs", "error")
      })
    },
  },
  created() {
    this.getCompany()
  },
}
</script>

<style lang="css" scoped>
</style>