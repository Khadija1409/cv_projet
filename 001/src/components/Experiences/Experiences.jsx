import './Experiences.css'

function Experiences() {
  const experiences = [
    {
      poste: 'Projet de cours : création de ce CV',
      lieu: 'Cours de Génie Logiciel, Licence 2',
      periode: '2026',
      missions: [
        'Création du projet avec Vite et React',
        'Découpage de la page en trois composants',
        'Affichage de données avec la méthode map',
      ],
    },
    {
      poste: 'Mes expériences en stage:',
      lieu: "Stage a ISI",
      periode: '2025 – 2026',
      missions: [
        'Developpeuse web',
        'plus de savoir faire dans ce que je fais',
      ],
    },
  ]

  return (
    <section className="experiences">
      <h2>Expériences</h2>

      {/* Une fiche (article) par expérience */}
      {experiences.map((exp) => (
        <article className="experience" key={exp.poste}>
          <div className="experience-entete">
            <h3>{exp.poste}</h3>
            <span className="periode">{exp.periode}</span>
          </div>
          <p className="lieu">{exp.lieu}</p>
          <ul>
            {exp.missions.map((mission) => (
              <li key={mission}>{mission}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

export default Experiences