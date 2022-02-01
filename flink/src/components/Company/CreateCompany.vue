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
          <h2>Create Menu</h2>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              
              <form @submit="onSubmit">

                <div class="form-group row">
                  <label for="options0" class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-6">
                    <input type="text" placeholder="Meta Platforms, Inc." name="options0" class="form-control" v-model.trim="form.name">
                  </div>
                </div>

                <div class="form-group row">
                  <label for="options1" class="col-sm-2 col-form-label">Symbol</label>
                  <div class="col-sm-6">
                    <input type="text" placeholder="FB" name="options1" class="form-control" v-model.trim="form.symbol">
                  </div>
                </div>

                <div class="form-group row">
                  <label for="options2" class="col-sm-2 col-form-label">Description</label>
                  <div class="col-sm-6">
                    <input type="text" placeholder="Meta Platforms Inc, formerly Facebook is the world's largest online social network." name="options2" class="form-control" v-model.trim="form.description">
                  </div>
                </div>

                <div class="form-group row">
                  <label for="options3" class="col-sm-2 col-form-label">IPO/Current Value</label>
                  <div class="col-sm-6">
                    <input type="text" placeholder="301.71" name="options3" class="form-control" v-model.trim="form.value">
                  </div>
                </div>

                <div class="rows">
                  <div class="col text-left">
                    <b-button type="submit" variant="success">Create</b-button>
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
      form: {
        name: '',
        description: '',
        symbol: '',
        value: '',
      },
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      
      const path = `http://localhost:8000/companies/`
      
      axios.post(path, this.form).then((response) => {
        this.form.name = response.data.name
        this.form.description = response.data.description
        this.form.symbol = response.data.symbol
        this.form.value = response.data.value
        swal("Company creation succesfull!", "", "success")
      })
      .catch((error) => {
        console.log(error)
        swal("Ooops!", "A problem ocurrs", "error")
      })
    },
  },
}
</script>

<style lang="css" scoped>
</style>