<template>
    <ul>
        <li 
            v-for="todo in todos"
            v-bind:key="todo.id"
            
        >
            
        
        <TodoItem 
            v-bind:mensaje="mensaje2"
            v-bind:todo='todo'
            v-on:mark-complete="marcadoCompleto"
        ></TodoItem>
        </li>
    </ul>
</template>

<script>
    import TodoItem from '@/components/TodoItem'
    export default {
        name:'TodoList',
        props:{
            mensaje2:String,
            todos:Array    
        },
        components:{
            TodoItem
        }, 
        methods:{
            marcadoCompleto(){
                return "<h1>hola</h1>"
            }

        }
        
    }
</script>

<style>

</style>