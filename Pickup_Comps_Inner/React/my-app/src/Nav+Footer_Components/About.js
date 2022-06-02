const Home = () => {
    return (
      <>
      <br/>
      <br/>
      <br/>
      <br/>
      <p>
        We used data from the NBA.com in order to create the software. We look at general, playtype, tracking and shot dashboard data.
        We then used the python package beautiful soup to web scrape the data and put it into a csv. Using the pandas and numpy, we 
        converted the raw data into percentile data for each player with the specific stats we wanted. After converting it into a json 
        file, we used javascript to calculate the similarity between you and every NBA player. We did this by creating a dictionary 
        from the sliders data. We passed that data into a function that loops through every NBA player's percentile data for those same 
        stats and takes the absolute value of the difference between what you submitted and what each specific NBA player's percentile 
        was for that specific stat. We then multiplied that number by a weight for each stat. We did this for each stat and added all 
        the number together and divided by the total weight to get the similarity score. From there, we projected the three most similar 
        NBA players at the bottom of the page.
      </p>
      <br/>
      </>
    )
  };
  
export default Home;