import './App.css';
//import Form from 'react-bootstrap/Form';
//import { FormCheck, FormGroup } from 'react-bootstrap';

function App() {
  return (
    <div className="Container">
      <h3 className='mt-5'> Inscrivez-vous au programme de cours religieux de Maktabatou As-salafiyyah </h3>
      {/* <Form>
          <Form.Group id='sign-in-form' className='row'>
            <Form.Check label='Parcours normal' className='col'/>
            <Form.Check label='Parcours etudiant en science' className='col'/>
          </Form.Group>
        </Form> */}
      <form>
        <h5> Identifiant de l'étudiant</h5>
        <div className='row justify-content-center mt-3'>
          <div className='form-control col'>
            <label className='form-control-label row mb-2' for='nom'>Nom</label>
            <input className='form-control-input row' type='text' placeholder='Entrez votre nom de famille'  id='nom' />
          </div>
          <div className='form-control col'>
            <label className='form-control-label row mb-2' for='prenom'>Prenoms</label>
            <input className='form-control-input row' type='text' placeholder='Entrez votre prenom' id='prenom' />
          </div>
        </div>
        <div className='row justify-content-center mt-3'>
          <div className='form-control col'>
            <label className='form-control-label row mb-2' for='birthday'>Date de naissance</label>
            <input className='form-control-input row' type='text' placeholder="Entrez la date de naissance de l'étudiant"  id='birthday' />
          </div>
          <div className='form-control col'>
            <label className='form-control-label row mb-2' for='birthplace'>Lieu de naissance</label>
            <input className='form-control-input row' type='text' placeholder="Entrez le lieu de naissance de l'étudiant" id='birthplace' />
          </div>
        </div>
        <div className='row justify-content-center mt-3'>
          <div className='form-control col'>
            <label className='form-control-label row mb-2' for='mail'>Adresse email</label>
            <input className='form-control-input row' type='email' placeholder="Entrez l'adresse mail de l'étudiant"  id='mail' />
          </div>
          <div className='form-control col'>
            <label className='form-control-label row mb-2' for='tel'>Numéro de téléphone</label>
            <input className='form-control-input row' type='number' placeholder="Entrez le Numéro de téléphone de l'étudiant" id='tel' />
          </div>
        </div>

        <h5 className='mt-3 mb-3'> Niveau de science acquis</h5>
        <p className='mt-2 '> Quel parcours, voulez-vous suivre ?</p>
        <div className='row justify-content-center mt-3'>
          <div className='form-check col-5'>
            <label className='form-check-label' for='opt1'>Parcours normal</label>
            <input className='form-check-input' type='checkbox' value='Parcours normal' id='opt1' />
          </div>
          <div className='form-check col-5'>
            <label className='form-check-label' for='opt2'>Parcours etudiant en science</label>
            <input className='form-check-input' type='checkbox' value='Parcours etudiant en science' id='opt2' />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
