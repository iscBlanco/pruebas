<template>
    <div>
        <h1>{{mensaje}}</h1>
        <input 
            type="checkbox"
            v-bind:checked="todo.completed"
            v-on:change="$emit('mark-complete')"

        />

        <label>
          {{todo.title}}
        </label>
        <button 
            v-on:click="$emit('delete-todo')"
        />
            
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
     props:{
            todo:Array,
            mensaje:String
    }    
}
</script>

<style>

</style>