// import { useState } from "react";

// export function ContactForm() {
//   const [status, setStatus] = useState("");

//   async function handleSubmit(event) {
//     event.preventDefault();
//     setStatus("Envoi en cours...");

//     const formData = new FormData(event.target);

//     formData.append(
//       "access_key",
//       import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
//     );

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();

//     if (result.success) {
//       setStatus("Message envoyé avec succès !");
//       event.target.reset();
//     } else {
//       setStatus("Une erreur est survenue. Réessaie.");
//     }
//   }
// }