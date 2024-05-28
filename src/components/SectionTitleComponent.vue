<template>
    <div class="section-title">
        <h2>{{ title }}</h2>
    </div>
</template>
  
<script>
export default {
    name: 'SectionTitleComponent',
    props: {
        title: String
    },
}
</script>
  
<style scoped>

.section-title {
    font-size: 20px;
    margin-left: 24px;
    margin-top: 16px;
}

</style>
  