import styles from '../styles/Faq.module.css'

const Faq = () => {
  return (
    <>
      <div className={styles.containerFaq}>
        <div className={styles.faq_cta}>
          <h1>HAVE QUESTIONS?</h1>
          <h4>We love to answer your questions,<br />
          do not hesitate to reach out to us<br />
          for more enquiries.</h4>
          <button className={styles.cta}>GET HELP</button>
        </div>
        <div className={styles.faq_dialogue}>
            <details open>
              <summary>Can I get a free inspection on my property?</summary>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse netus et dictum volutpat, mattis 
                adipiscing et tellus mattis. In amet neque eget 
                tellus lacus, elit. Neque semper habitant vitae 
                orci, senectus. Eu sed amet quis elit nunc, nulla 
                urna lorem. Blandit blandit turpis nisi tortor. 
                Blandit purus mattis.</p>
            </details>
            <details>
              <summary>Can I get a free inspection on my property?</summary>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse netus et dictum volutpat, mattis 
                adipiscing et tellus mattis. In amet neque eget 
                tellus lacus, elit. Neque semper habitant vitae 
                orci, senectus. Eu sed amet quis elit nunc, nulla 
                urna lorem. Blandit blandit turpis nisi tortor. 
                Blandit purus mattis.</p>
            </details>
            <details>
              <summary>Can I get a free inspection on my property?</summary>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse netus et dictum volutpat, mattis 
                adipiscing et tellus mattis. In amet neque eget 
                tellus lacus, elit. Neque semper habitant vitae 
                orci, senectus. Eu sed amet quis elit nunc, nulla 
                urna lorem. Blandit blandit turpis nisi tortor. 
                Blandit purus mattis.</p>
            </details>
            <details>
              <summary>Can I get a free inspection on my property?</summary>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse netus et dictum volutpat, mattis 
                adipiscing et tellus mattis. In amet neque eget 
                tellus lacus, elit. Neque semper habitant vitae 
                orci, senectus. Eu sed amet quis elit nunc, nulla 
                urna lorem. Blandit blandit turpis nisi tortor. 
                Blandit purus mattis.</p>
            </details>
            <details>
              <summary>Can I get a free inspection on my property?</summary>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse netus et dictum volutpat, mattis 
                adipiscing et tellus mattis. In amet neque eget 
                tellus lacus, elit. Neque semper habitant vitae 
                orci, senectus. Eu sed amet quis elit nunc, nulla 
                urna lorem. Blandit blandit turpis nisi tortor. 
                Blandit purus mattis.</p>
            </details>
        </div>
      </div>
    </>
  )
}

export default Faq
