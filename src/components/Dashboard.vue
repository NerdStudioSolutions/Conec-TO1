<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="card">
          <div class="card-header "><h3>Catalogo</h3></div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Giro</th>
                <th scope="col">Productos/Servicios</th>
                <th scope="col">Responsable</th>
                <th scope="col">Telefono</th>
                <th scope="col">Direccion</th>
                <th scope="col">Serv. A domicilio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Comida</td>
                <td>Gorditas de queso, migajas y Rellenas de queso</td>
                <td>Alma Delia Jimenez</td>
                <td>4411171224</td>
                <td>Venustiano Carranza</td>
                <td>si</td>
              </tr>
              <tr>
              <th scope="row">2</th>
              <td>Apícola, Derivados</td>
              <td>Productos derivados de la miel</td>
              <td>Miel Ontiveros</td>
              <td>4191911824</td>
              <td>Carretera Bernal km 32</td>
              <td>si</td>
              </tr>
            </tbody>
          </table>
          <div class="card-body">
            <div v-if="user" class="alert alert-success" role="alert">bienvenido {{ name }} has iniciado sesión</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>