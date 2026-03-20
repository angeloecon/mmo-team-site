 export default function GlitchText({ text, className }) {
  return (
    <span 
      className={`glitch-wrapper ${className}`} 
      data-text={text}  
    >
      {text}
    </span>
  );
}