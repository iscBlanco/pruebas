<template>
  <div>
      <AddTodo></AddTodo>
      <TodoList 
        v-bind:todos='filterTodos'
        mensaje2="es otro pedo"></TodoList>
      <FilterTodos></FilterTodos>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import FilterTodos from '@/components/FilterTodos'
export default {
    name:'Home',
    components:{
        AddTodo,
        FilterTodos,
        TodoList
    },
    data(){
        return{
            todos: [],
            filterTodos:[],
            itemsCounter:0
        }
    },
    methods:{

    },
    created(){
        this.todos =[
            {"id": 0, "title":"Learn Vue", "completed":false},
            {"id": 1, "title":"Learn Vuex", "completed":false},
            {"id": 2, "title":"Learn Vue CLI", "completed":false},
        ]
        this.filterTodos = this.todos
        this.itemsCounter = this.todos.length
    }
}
</script>

<style>

</style>