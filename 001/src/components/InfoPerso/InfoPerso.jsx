import './InfoPerso.css'

function InfoPerso() {
  const nom = 'Khadidiatou Kandji'
  const titre = 'Étudiante en Licence 2 Génie Logiciel'
  const resume =
    "Étudiante motivée par le développement web, à la recherche d'un stage pour mettre en pratique mes connaissances."
  const contacts = [
    { label: 'Email', valeur: 'khadykandji124@gmail.com' },
    { label: 'Téléphone', valeur: '+221 77 507 20 30' },
    { label: 'Ville', valeur: 'Dakar, Sénégal' },
  ]

  return (
    <header className="info-perso">
      <h1>{nom}</h1>
      <p className="titre">{titre}</p>
      <p className="resume">{resume}</p>

      <ul className="contacts">
        
        {contacts.map((contact) => (
          <li key={contact.label}>
            <span className="contact-label">{contact.label}</span>
            <span>{contact.valeur}</span>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default InfoPerso