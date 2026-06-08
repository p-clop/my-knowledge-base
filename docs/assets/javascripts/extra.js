document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.md-content')?.classList.add('fade-in');
});

var style = document.createElement('style');
style.textContent = `
  .fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
