<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.title">
    	<router-link v-bind:to="'/blog/' + blog.objectId">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>

    	<article>
    		{{blog.content | snippet}}
    	</article>
    </div>
  </div>
</template>

<script>
import { getBlogs } from '../apis/blogs'
export default {
  name: 'show-blogs',
  data() {
  	return {
  		blogs: [],
  		search: ''
  	}
  },
  created(){
    getBlogs('/blogs').then((res) => {
      let blogs = res.data.results
      console.log('blogs', blogs)
      let blogsArray = []
      for (let key in blogs) {
        blogsArray.push(blogs[key])
      }
      this.blogs = blogsArray
    })
  },
  computed: {
  	filteredBlogs() {
  		return this.blogs.filter((blog) =>{
  			return blog.title.match(this.search);
  		})
  	}
  },
  filters: {
  	toUppercase(value){
  		return value.toUpperCase();
  	}
  },
  directives: {
  	'rainbow':{
  		bind(el,binding,vnode){
  			el.style.color = "#" + Math.random().toString(16).slice(2,8);
  		}
  	}
  }
}
</script>

<style>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
}

.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a{
  color: #444;
  text-decoration: none;
}

input[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
