import React, { useState } from 'react';

import Modal from 'react-modal';

import './AddMovie.css';
import Rate from '../Rate';


Modal.setAppElement('#root');

const AddMovie = ({addMovie}) => {
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
    
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const[trailer,setTrailer]=useState('');
   
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
     
    }
  
    function closeModal(){
      setIsOpen(false);
      setName('');
      setRating('');
      setImage('');
      setDate('');
      setDescription('');
      setTrailer('');
      
    }
    const handleSubmit = (e) => {
        let newMovie = {
          name: name,
          rating: rating,
          image: image,
          date: date,
          description: description,
          trailer:trailer,
        };
        addMovie(e, newMovie);
        setIsOpen(false);
        setName('');
        setRating('');
        setImage('');
        setDate('');
        setDescription('');
        setTrailer('');
    };
      return (
        <div className="Addmovie_cont">
          <button className="addmovie-btn" onClick={openModal}>Add New Movie</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
           
          >
  
            
            <div className='allfrm'>
            <form>
                <label >Movie Name</label>
              <input  type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
              <label>Date</label>
              <input type='text' value={date} onChange={(e)=>setDate(e.target.value)}/>
              <label>Rate</label>
              <Rate rating={rating} starIndex={setRating}/>
              <input type='text' value={rating} onChange={(e)=>setRating(e.target.value)}/>
              <label>Poster</label>
              <input type='text' value={image} onChange={(e)=>setImage(e.target.value)}/>
              <label>Trailer</label>
              <input type='text' value={trailer} onChange={(e)=>setTrailer(e.target.value)}/>
              <label>Summary</label>
              <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </form>
            <button className="Modal-btn" onClick={handleSubmit}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
        </div>
          </Modal>
        </div>
      );
  }


    

export default AddMovie
