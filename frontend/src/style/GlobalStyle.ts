import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
      
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-size: .95rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, #root {
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
  }

  button, input, textarea {
    border: 0;
    outline: none;
  }

  .row {
    display: flex;

    @media (max-width: 720px) {
      flex-direction: column;
    }

    [class^="col"] {
      flex: 1;

      @media (max-width: 720px) {
        max-width: 100% !important;
        flex: 1 !important;
      }

      @media (min-width: 720px) {
        margin: 1% 1.5% 1% 0;
        
        :last-child {
          margin-right: 0;
        }
      }
    }

    .col-1 { flex-basis: 6.958%; max-width: 6.958%; }
    .col-2 { flex-basis: 15.417%; max-width: 15.417%; }
    .col-3 { flex-basis: 23.875%; max-width: 23.875%; }
    .col-4 { flex-basis: 32.333%; max-width: 32.333%; }
    .col-5 { flex-basis: 40.792%; max-width: 40.792%; }
    .col-6 { flex-basis: 49.250%; max-width: 49.250%; }
    .col-7 { flex-basis: 57.708%; max-width: 57.708%; }
    .col-8 { flex-basis: 66.167%; max-width: 66.167%; }
    .col-9 { flex-basis: 74.625%; max-width: 74.625%; }
    .col-10 { flex-basis: 83.083%; max-width: 83.083%; }
    .col-11 { flex-basis: 91.542%; max-width: 91.542%; }
    .col-12 { flex-basis: 100.000%; max-width: 100.000%; }

  }

  .btn {
    position: relative;
    padding: 12px 18px;
    font-weight: 600;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    border-radius: 8px;
    font-size: .9rem;
    color: white;
    bottom: 0;

    transition: bottom .1s ease-in-out;

    :hover {
      bottom: 2px;
    }
  }

  .bg-green {
    background-color: var(--green);
  }
  
  .bg-yellow {
    background-color: var(--yellow);
  }
  .bg-blue {
    background-color: var(--blue);
  }
  .bg-red {
    background-color: var(--red);
  }

  h1 {
    font-weight: 800;
    font-size: 2rem;
    color: var(--blue);
  }

  .shaded-text {
    text-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
  }

  .block {
    display: block;
    width: 100%;
  }

  .form-group {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 2px;
      font-size: 0.9rem;
      color: var(--gray);
    }

    :not(:last-child) {
      margin-bottom: 15px;
    }
  }

  .form-control {
    background-color: #F0F0F0;
    padding: 12px 18px;
    color: var(--dark);
    border-radius: 8px;

    :not(:last-child) {
      margin-bottom: 15px;
    }

    transition: box-shadow 0.2s ease-in-out;

    :focus {
      box-shadow: 0 0 0 2px var(--blue);
    }

    :disabled {
      cursor: not-allowed;
    }
  }

  .alert {
    padding: 12px 18px;
    font-weight: 600;
    color: white;
    border-radius: 8px;
    font-size: .85rem;
    
    :not(:last-child) {
      margin-bottom: 15px;
    }
  }

`;