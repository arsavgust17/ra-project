<template>
    <Table :columns="columns1" :data="data1"></Table>
</template>

<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'ФИО',
                        key: 'Fio'
                    },
                    {
                        title: 'Первый критерий',
                        key: 'firststat'
                    },
                    {
                        title: 'Второй критерий',
                        key: 'secondstat'
                    },
                    {
                        title: 'Третий критерий',
                        key: 'thirdstat'
                    },
                ],
                data1: [
                    {
                        Fio: 'John Brown',
                        firststat: 18,
                        secondstat: 14,
                        thirdstat: 1,
                    },
                    {
                        Fio: 'John Brown',
                        firststat: 18,
                        secondstat: 14,
                        thirdstat: 1,
                    },
                    {
                        Fio: 'John Brown',
                        firststat: 18,
                        secondstat: 14,
                        thirdstat: 1,
                    },
                    {
                        Fio: 'John Brown',
                        firststat: 18,
                        secondstat: 14,
                        thirdstat: 1,
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>