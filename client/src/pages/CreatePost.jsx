import {useState} from 'react'
import { useNavigate  } from 'react-router-dom'
import { preview } from '../assets'
import {getRandomPrompt} from '../utils';
import {FormField,Loader} from '../components';
 
const CreatePost  = () => {
    
    const navigate = useNavigate();
    const [form,setform] = useState({
        name:"",
        prompt:"",
        photo:""
    });
    const [generatingImg,setgeneratingimg] = useState(false);
    const [Loading,setloading] = useState(false);
    
    const generateImage=async () => {
        if(form.prompt){
          try{
              setgeneratingimg(true);
              const response= await fetch('http://localhost:8080/api/v1/dalle', {
                method:'POST',
                headers: {
                  'Content-Type': 'application/json',
                      },
                body:JSON.stringify({prompt:form.prompt}),
              });
              const data=await response.json();
              setform({...form,photo:`data:image/jpeg;base64,${data.photo}`});
          }catch (e){
              alert(e);
          } finally{
            setgeneratingimg(false);
          }
        }
        else{
          alert("please enter a prompt");
        }
    }
    const handleSubmit= async (e) =>{
      e.preventDefault();
      if(form.prompt && form.photo){
        setloading(true);
        try{
            const response=await fetch("http://localhost:8080/api/v1/post",{
              method:'POST',
              headers:{
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(form)
            })
            await response.json();
            navigate('/');
        }catch(e){
            alert(e);

        } finally{
          setloading(false);
        }
      }
      else{
        alert("please enter a prompt and enter generate");
      }

    }
    const handleChange=(e) =>{
        setform({...form,[e.target.name]:e.target.value})
    }
    const handleSurpriseMe=() =>{
        const randomPrompt=getRandomPrompt(form.prompt);
        console.log('working');
        setform({...form,prompt:randomPrompt});
    }
    return (
     <section className='max-w-7xl mx-auto'>
        
         <div>
             <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
             <p className='mt-2 text=[#666e75] text-[16px] max-w[500px]'>Create imaginative and visually stunning images through Dall-E AI and share them with the commmunity</p>
         </div>
        <form className='mt-16 max-w-3xl ' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-5'>
                <FormField 
                LabelName = 'Your Name'
                type='text'
                name='name'
                placeholder='Mohan'
                value={form.name}
                handleChange={handleChange}
                />
                <FormField 
                LabelName = 'prompt'
                type='text'
                name='prompt'
                placeholder='A plush toy robot sitting against a yellow wall'
                value={form.prompt}
                handleChange={handleChange}
                isSurpriseMe
                handleSurpriseMe={handleSurpriseMe}
                />
                <div
      className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64-p-3 h-64 flex justify-center items-center'>
        {form.photo ? (
          <img src={form.photo}
            alt={form.prompt}
            className='w-full h-full object-contain'
          />
        ) : (
          <img src={preview}
          alt='preview'
          className='w-48 h-48 object-contain opacity-40'
          />
        )}
        {generatingImg && (
            <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
            <Loader/>
            </div>
        )}
      </div>
            </div>
            <div className='mt-5 flex gap-5'>
                    <button type="button"
                    onClick={generateImage}
                    className='text-white bg-green-700 font-medium rounded-md sm:w-auto px-5 py-2.5 text-sm w-full'>
                        {generatingImg ? 'Generating...' : 'Generate' }
                    </button>
            </div>
            <div className='mt-10'>
            <p className='mt-2 text-[#666e75] text-[14px]'>Once you have created a image you want you can share it with the commmunity</p>
            <button type='submit'
            className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
                {Loading ? 'Sharing...' : 'Share with the community'}
            </button>
            </div>
        </form>
    </section>
    
  );
}

export default CreatePost