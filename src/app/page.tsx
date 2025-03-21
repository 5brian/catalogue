import React from "react";

export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'Monaco, monospace', 
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingTop: '20vh',
      paddingLeft: '20%'
    }}>
      <h1 style={{ marginBottom: '20px' }}>brian tan</h1>
      <p style={{ margin: '5px 0' }}>b. 2004, santa rosa. undergrad math & computer science, incoming atc at the faa</p>
      <p style={{ margin: '5px 0' }}>
        <a href="mailto:hi@brian-tan.me" style={{ color: 'white', textDecoration: 'underline' }}>
          hi@brian-tan.me
        </a>
      </p>
      <p style={{ margin: '5px 0' }}>
        <a href="https://github.com/5brian" style={{ color: 'white', textDecoration: 'underline' }}>
          github.com/5brian
        </a>
      </p>
    </div>
  );
}
