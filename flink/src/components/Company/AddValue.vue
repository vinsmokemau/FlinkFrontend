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
          <h2>Nuevo Valor</h2>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              
              <form @submit="onSubmit">

                <div class="form-group row">
                  <label for="options0" class="col-sm-2 col-form-label">Value</label>
                  <div class="col-sm-6">
                    <input type="text" name="options0" class="form-control" v-model.trim="form.value">
                  </div>
                </div>

                <div class="rows">
                  <div class="col text-left">
                    <b-button type="submit" variant="success">Agregar</b-button>
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
        value: '',
      },
    }
  },
  methods: {
    getCompany () {
      const path = `http://localhost:8000/companies/${this.company}/`
      axios.get(path).then((response) => {
        this.form.name = response.data.value
      })
      .catch((error) => {
        console.log(this.form)
      })
    },
    onSubmit (evt) {
      evt.preventDefault()
      
      const path = `http://localhost:8000/companies/${this.company}/`
      
      axios.patch(path, this.form).then((response) => {
        this.form.name = response.data.value
        swal("Update succesfull!", "", "success")
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