<template>
<div class="row">
    <div class="container col-6">
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Diagram</h5>
            </div>

            <div class="card-img-bottom">
            <chartjs-doughnut
                :bind="true"
                :datasets="datasets"
                :labels="labels"
                :option="option"
            />
            </div>
        </div>

    </div>
</div>
</template>
<style>
#template {
    width: 200px;

}

</style>

<script>
export default {
  data() {
    return {
      datasets: [
        {
          data: [10, 20, 80],
          backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
          hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"]
        }
      ],
      labels: ["Foo", "Bar", "Baz"],
      option: {}
    };
  }
};
</script>