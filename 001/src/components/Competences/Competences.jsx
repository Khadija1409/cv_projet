import './Competences.css'

function Competences() {

  const groupes = [
    {
      titre: 'Développement',
      items: ['HTML et CSS', 'JavaScript', 'React', 'Git et GitHub'],
    },
    {
      titre: 'Outils',
      items: ['VS Code', 'Vite', 'npm','Pycharm'],
    },
    {
      titre: 'Langues',
      items: ['Français', 'Anglais'],
    },
  ]

  return (
    <section className="competences">
      <h2>Compétences</h2>
      {groupes.map((groupe) => (
        <div className="groupe" key={groupe.titre}>
          <h3>{groupe.titre}</h3>
          <ul>
            {groupe.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Competences