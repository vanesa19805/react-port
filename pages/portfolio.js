function Portfolio (){

return(
    <main>
   

<section className ="container1" style={{width: "30%;"}}>
    <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img className="project-1" src="./assets/grouppro1.jpg"  img alt= "group project done in className, in floating box with link"/>
              <span className="card-title">Project 1</span>
            </div>
            <div className="card-content">
              <p>This project was the first where I collaborated with mutiple individules to complete a workable web page. this is where we has elements of HTML, JS, CSS, web server API's. We also learned on how to user Github to pull request, merge and review each others work in a team. This was very fun!</p>
            </div>
            <div className="card-action">
              <a href="https://sa605935.github.io/Movie_Snapshot/">https://sa605935.github.io/Movie_Snapshot/</a>
            </div>
          </div>
        </div>
      </div> 
    </section>

<section calls= "container2" style= {{width:"30%;"}}>
    <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="./assets/ecoomerce.png" alt=" picture shows the first version of my portfolio, it just shows basic html and css code"/>
              <span className="card-title">Back-End Ecommerce</span>
            </div>
            <div className="card-content">
              <p>This Project is one example of my back-end code homeworks </p>
            </div>
            <div className="card-action">
              <a href="https://github.com/vanesa19805/ecommerce-hw">GitHub repo page- this is not deployed</a>
            </div>
          </div>
        </div>
      </div>
</section>
<section className= "container3" style={{width: "30%", paddingBottom: "10%;"}}>
    <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="./assets/workday.png"/>
              <span className="card-title">Work Day Scheduler</span>
            </div>
            <div className="card-content">
              <p>This assignment helped the user schedule their 5 hour work day. It lets the used know the year, day and month. It starts the regular work day, as the day goes on it will reflect green for current time, red part time and grey for time not yet passed </p>
            </div>
            <div className="card-action">
              <a href="https://vanesa19805.github.io/schedularwork/">https://vanesa19805.github.io/schedularwork/</a>
            </div>
          </div>
        </div>
      </div>
</section>


</main>
    
);




}
export default Portfolio