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
          <h2>Companies</h2>

          <div class="col-md-12">
            <div class="overflow-auto">
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination>
            </div>
            <p class="mt-3">Página: {{ currentPage }}</p>

            <b-table striped hover :items="companies" :fields="fields">
              <template v-slot:cell(name)="row">
                <p>{{row.item.name}}</p>
              </template>
              <template v-slot:cell(description)="row">
                <p>{{row.item.description}}</p>
              </template>
              <template v-slot:cell(symbol)="row">
                <p>{{row.item.symbol}}</p>
              </template>
              <template v-slot:cell(action)="row">
                <b-button size ="sm" variant="success">
                  Nuevo Valor
                </b-button>
                <b-button size ="sm" variant="primary">
                  Editar
                </b-button>
                <b-button size ="sm" variant="danger" :to="{name: 'DeleteCompany', params: {companyId: row.item.id}}">
                  Eliminar
                </b-button>
              </template>
            </b-table>

            <b-button size ="sm" variant="primary" :to="{name: 'CreateCompany'}">
              Agregar
            </b-button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [
        { key: 'name', label: 'Name'},
        { key: 'description', label: 'Description'},
        { key: 'symbol', label: 'Symbol'},
        { key: 'action', label: ''},
      ],
      companies: [],
    }
  },
  methods: {
    getCompanies () {
      const path = `http://localhost:8000/companies/`
      axios.get(path).then((response) => {
        this.companies = response.data
        console.log(this.companies)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  computed: {
    rows() {
      return this.companies.length
    }
  },
  created(){
    this.getCompanies()
  }
}
</script>

<style lang="css" scoped>
</style>