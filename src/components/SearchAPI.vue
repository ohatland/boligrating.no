<template>
	<div>
		<label for="search">Skriv inn addresse </label>
		<input v-model="searchText" value="search">
		<searchResult v-bind:result=result />
	</div>
</template>

<script>
import axios from "axios";
import searchResult from './SearchResult'

export default {
  data() {
    return {
      result: [],
			errors: [],
      oldSearch: '',
      searchText: '',
    };
  },

  updated() {
    // only search the same word once hack
    if(this.oldSearch !== this.searchText) {
      this.getDataFromAPI(this.searchText);
      this.oldSearch = this.searchText
    }
  },

  components: {
    searchResult,
  },

  methods: {
    getDataFromAPI(text) {
      axios({
        method: "GET",
				url: "https://ws.geonorge.no/adresser/v1/sok",
				params: {
					sok: text,
					treffPerSide: 10,
					side: 0,
					asciiKompatibel: true,
				}
      })
        .then((response) => {
          // JSON responses are automatically parsed.
          this.result = response.data.adresser;
        })
        .catch((e) => {
          this.errors.push(e);
          console.error(e)
        });
    },
  },
};
</script>