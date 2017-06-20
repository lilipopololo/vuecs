api.post(api.getUrl('document-lista'),{})
.then(data=>{
this.LoadingP()
console.log(data)
})