fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(json => {
    var content =
     `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-1">
      <div class="col-md-5">
        <img src="imageSymbol" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">countryName</h5>
          <p class="card-text">description</p>
          <p class="card-text"><small class="text-muted">population</small></p>
        </div>
      </div>
    </div>
  </div>`
      for (let i= 0 ; i < json.length; i++) {
        var x=document.createElement('div')
        var appearence =content.replace('imageSymbol',json[i].flag)
         appearence =appearence.replace('countryName',json[i].name)
         appearence =appearence.replace('population',json[i].population)
         appearence =appearence.replace('description',json[i].region)
         
        x.innerHTML=appearence 

        document.getElementById('sara').appendChild(x);
      }
  }) 