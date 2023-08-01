import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import BackgroundVideo from "./Components/background-video-1.mp4"
import bjosh from "./Components/resident-pastor-thumbnail.png"
 


function App() {
  return (
<div className="App">
<Navbar /> 
       
  <main>
      <section id='home'>
        <div className='mainvid'>
           <video src={BackgroundVideo} autoPlay loop muted />
           <div className='content'>
               <h2>First Love Church</h2>
               <h6>Welcome Home</h6>
           </div>
           
        </div>
        
      </section>

      <section id='about'>
        <div className='main'>
        <div className='blurb_container'>
          <h4>
            <span>Dag Heward-Mills</span>
          </h4>
          <p id="dag"><strong>Dag Heward-Mills is a mega church pastor,  and the founder of the United Denominations Originating 
            from the Lighthouse Group of Churches.</strong> Spanning ten denominations, he oversees over 3000 churches on 
            every continent of the globe. Amongst these denominations is the First Love Church.
          </p>

          <p>
            He is also a prolific, best-selling author, with the best selling Makarios collection of 60 books. 
            His writings have been translated into over 50 languages all over the world.
          </p>
          <p>
            Dag Heward-Mills’ Healing Jesus Campaigns holds large evangelistic crusades all over Africa and are 
            among the largest evangelistic efforts on the continent.
          </p>
           <p>
              Dag can be heard or watched ministering to millions on various television, radio and internet platforms.
           </p>
          <p>
              Click below to find out more about our leader!
          </p>
            
        </div>

              <a href="https://www.daghewardmills.org/" className='btn2'>Dag Heward-Mills</a>
              
        </div>
      </section>
      
      <section id="whoweare">
            <div id='whoweare_div'>
          
              <h1 id="whoweare_h1">The First Love Center</h1>
              <div className='blurb-description'>
                       <h4>
                         <strong>We believe in Jesus, soul winning and<br/>working for the Lord all day long.</strong>
                     </h4>
                     
                     <p>
                        In 2012, our founder Bishop <strong>Dag Heward-Mills</strong> was led by the Holy Spirit to begin a<br/>
                        new denomination which he called the First Love Church. In a small chapel on the <br/>
                        University of Ghana, Legon Campus, he gathered a few students and began a small<br/> church.
                     </p>
                     <p></p>
                     <p>
                         A few years later, God has increased us into one of the largest churches in our city.<br/>
                         With over 10,000 members and in our new state of the art auditorium, we are even<br/>
                          more determined to see the name of Jesus lifted in the city of Accra.
                     </p>
                     <p>
                         Today, thousands of young people gather at our services because we believe that<br/>
                         everyone is welcome into the house of God. In a place where soul-winning is our <br/>  
                         passion,we have seen countless lives changed, saved and renewed in our church.
                     </p>
                     <p>
                          
                     Join us for a life changing encounter with the Word of God, Worship and the Holy<br/>
                     Spirit. A Sunday at the First Love Center is more than just a church service, it’s an<br/>
                     experience!
                     </p>   

                     
                     <div >
                         <p><img src={bjosh} alt='resident pastor' /></p>

                         <p className='bjosh'> Joshua Dag Heward-Mills,<br/>
                                  Resident Pastor.</p>
                     </div>
              </div>
              <button className='btn '>LOCATE THE FIRST LOVE CENTER</button>
          </div>
      </section>
        
       <section id="welcome">
              <div class="container1">
                <div>
                    <h1>First Love Church</h1>
                    <h3>Welcome Home</h3>
                    <h5>Your ALL ACCESS PASS to everything that is happening at FirstLove around the globe!</h5>
                    <button className='btn1'>WATCH FREE</button>
                </div>
              </div>
        
       </section>  

       <section id='audio'>
  <div>
        <div >
             <h4 id='makeBold'>DHMM Audios</h4>
             <p><strong>Welcome to the Dag Heward-Mills Audio Collection!<br/>
             This collection of sound teachings and songs will transform <br/>your life!<br/>
                     Browse the catalog now.</strong></p>
        </div>
  <div className='audiocenter'>
  <table>
       <div className='dhmm_top'>
         <div>
             <tr>
                <div className='audiospace'> <td><a className='btn2' href='https://media.firstlovecenter.com/dhm-audio-catalog'>DHMM MINISTRY PRODUCTS</a></td></div>
                 <td><a className='btn2' href='https://www.mediafire.com/file/j6imxop3nj4viyg/DHMM_Audio_2020.zip/file'>CLICK HERE FOR 2020 UPDATE!</a></td>
             </tr>  
          </div>
       </div>
          <div className='dhmm_bottom'>
              <div>
                 <tr>
                    <div className='audiospace'><td><a className='btn2' href='https://www.mediafire.com/file/qbyv9yjz6jj1gij/Flow_Prayer_Season_1.zip/file'>FLOW SEASON 1 AUDIOS</a></td></div>
                    <td><a className='btn2' href='https://www.mediafire.com/file/z7fzuxnvtpwyv5s/DHM_Audio_Update_2021.zip/file'>CLICK HERE FOR 2021 UPDATE!</a></td>
                 </tr>
              </div>
        </div>
            
       
        </table>
  </div>
    
        </div>
</section>

       <section id='events'>

        <h1>Conferences and Events</h1>


       </section>

       <section id='giving'>

        <h1>How to give!</h1>

       </section>
           
       
      
       </main>
       
    </div>

    
);
}

export default App;
