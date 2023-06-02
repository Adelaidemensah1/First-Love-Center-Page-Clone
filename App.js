import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar />
       
       <div className='header-content'>
        <h1>First Love Church</h1>
        <h6>Welcome Home</h6>
       </div>
       <div className='jumbotron' >
        <h1>Dag Heward-Mills</h1>
        <p>Dag Heward-Mills is a mega church pastor,  and the founder of the United Denominations Originating from the Lighthouse Group of Churches. Spanning ten denominations, he oversees over 3000 churches on every continent of the globe. Amongst these denominations is the First Love Church.

            He is also a prolific, best-selling author, with the best selling Makarios collection of 60 books. His writings have been translated into over 50 languages all over the world.

            Dag Heward-Mills’ Healing Jesus Campaigns holds large evangelistic crusades all over Africa and are among the largest evangelistic efforts on the continent.

            Dag can be heard or watched ministering to millions on various television, radio and internet platforms.

            Click below to find out more about our leader!</p>
 
              <a href="https://www.daghewardmills.org/" className='btn btn-info btn-lg'>Dag Heward-Mills</a>
        <div className='jumbotron'>
          <h1>The First Love Center</h1>
          <p>
             We believe in Jesus, soul winning and working for the Lord all day long.
             In 2012, our founder Bishop Dag Heward-Mills was led by the Holy Spirit to begin a new denomination which he called the First Love Church. In a small chapel on the University of Ghana, Legon Campus, he gathered a few students and began a small church.
             A few years later, God has increased us into one of the largest churches in our city. With over 10,000 members and in our new state of the art auditorium, we are even more determined to see the name of Jesus lifted in the city of Accra.

             Today, thousands of young people gather at our services because we believe that everyone is welcome into the house of God. In a place where soul-winning is our passion, we have seen countless lives changed, saved and renewed in our church.

             Join us for a life changing encounter with the Word of God, Worship and the Holy Spirit. A Sunday at the First Love Center is more than just a church service, it’s an experience!
          </p>
          <button className='btn btn-success btn-lg'>LOCATE THE FIRST LOVE CENTER</button>
        </div>
       </div>
    </div>

    
);
}

export default App;
