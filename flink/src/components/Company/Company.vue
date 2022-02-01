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
          <h2>{{ company.name }} <small>({{ company.symbol }})</small></h2>
          <p>{{ company.description }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h3>Current Value: {{ currentValue }}</h3>
              <line-chart :chart-data="datacollection"></line-chart>
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
import LineChart from "./LineChart.js";

export default {
  data () {
    return {
      companyId: this.$route.params.companyId,
      company: '',
      currentValue: '',
      datacollection: null,
    }
  },
  components: {
    LineChart
  },
  methods: {
    getCompany () {
      const path = `http://localhost:8000/companies/${this.companyId}/`
      axios.get(path).then((response) => {
        this.company = response.data
        this.currentValue = response.data.market_values[response.data.market_values.length - 1]
        let labels = []
        for (let i = 0; i < response.data.market_values.length; i++) {
          labels.push(i);
        }
        this.datacollection = {
          labels: labels,
          datasets: [
            {
              data: response.data.market_values,
              borderColor: "#3e95cd",
              fill: false
            },
          ]
        }
      })
      .catch((error) => {
        console.log(this.form)
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