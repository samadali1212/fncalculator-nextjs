
import { saveAs } from 'file-saver';

/**
 * Generates an HTML template for creating a How-To guide
 */
export const generateHowToGuideTemplate = (guideTitle: string = "Your Guide Title") => {
  const template = `<!DOCTYPE html>
<html>
<head>
  <title>${guideTitle} Template</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    .section { margin-bottom: 30px; }
    h1, h2 { margin-bottom: 20px; }
    .step { margin-bottom: 25px; }
    .field { margin-bottom: 15px; }
    label { font-weight: bold; display: block; margin-bottom: 5px; }
    input, textarea { width: 100%; padding: 8px; }
    textarea { min-height: 100px; }
    .step-container { border: 1px solid #ccc; padding: 15px; margin-bottom: 15px; }
    .fact-container { border: 1px solid #ccc; padding: 15px; margin-bottom: 15px; }
    .add-btn { background: #4CAF50; color: white; border: none; padding: 10px 15px; cursor: pointer; margin: 10px 0; }
    .hint { font-size: 12px; color: #666; font-style: italic; }
  </style>
</head>
<body>
  <h1>How-To Guide Template</h1>
  <p>Fill out this template to create your how-to guide</p>
  
  <div class="section">
    <h2>Basic Information</h2>
    <div class="field">
      <label for="title">Guide Title:</label>
      <input type="text" id="title" placeholder="How To Apply For An ID In South Africa" />
    </div>
    <div class="field">
      <label for="slug">Slug (URL-friendly title):</label>
      <input type="text" id="slug" placeholder="apply-for-id-south-africa" />
      <p class="hint">Letters, numbers, and hyphens only. No spaces.</p>
    </div>
    <div class="field">
      <label for="shortDescription">Short Description:</label>
      <textarea id="shortDescription" placeholder="A brief summary of what this guide covers (1-2 sentences)"></textarea>
    </div>
    <div class="field">
      <label for="fullDescription">Full Description:</label>
      <textarea id="fullDescription" placeholder="A more detailed explanation of what this guide covers (3-5 sentences)"></textarea>
    </div>
    <div class="field">
      <label for="imageUrl">Main Image URL:</label>
      <input type="text" id="imageUrl" placeholder="https://example.com/image.jpg" />
      <p class="hint">Use a high-quality image that represents the guide topic</p>
    </div>
    <div class="field">
      <label for="difficulty">Difficulty Level:</label>
      <select id="difficulty">
        <option value="Easy">Easy</option>
        <option value="Moderate">Moderate</option>
        <option value="Difficult">Difficult</option>
      </select>
    </div>
    <div class="field">
      <label for="timeRequired">Time Required:</label>
      <input type="text" id="timeRequired" placeholder="1-2 hours" />
    </div>
    <div class="field">
      <label for="tags">Tags (comma-separated):</label>
      <input type="text" id="tags" placeholder="ID Document, Home Affairs, Government Services" />
    </div>
  </div>
  
  <div class="section">
    <h2>Steps</h2>
    <div id="steps-container"></div>
    <button class="add-btn" onclick="addStep()">+ Add Step</button>
  </div>
  
  <div class="section">
    <h2>Key Facts (Optional)</h2>
    <div id="facts-container"></div>
    <button class="add-btn" onclick="addFact()">+ Add Fact</button>
  </div>
  
  <div class="section">
    <h2>Generate Guide JSON</h2>
    <button class="add-btn" onclick="generateJSON()">Generate JSON</button>
    <div class="field">
      <textarea id="output" readonly></textarea>
    </div>
  </div>

  <script>
    let stepCount = 0;
    let factCount = 0;
    
    function addStep() {
      stepCount++;
      const stepDiv = document.createElement('div');
      stepDiv.className = 'step-container';
      stepDiv.innerHTML = \`
        <h3>Step \${stepCount}</h3>
        <div class="field">
          <label for="step-\${stepCount}-title">Title:</label>
          <input type="text" id="step-\${stepCount}-title" placeholder="Step title" />
        </div>
        <div class="field">
          <label for="step-\${stepCount}-description">Description:</label>
          <textarea id="step-\${stepCount}-description" placeholder="Detailed instructions for this step"></textarea>
        </div>
        <div class="field">
          <label for="step-\${stepCount}-imageUrl">Image URL (optional):</label>
          <input type="text" id="step-\${stepCount}-imageUrl" placeholder="https://example.com/step-image.jpg" />
        </div>
      \`;
      document.getElementById('steps-container').appendChild(stepDiv);
    }
    
    function addFact() {
      factCount++;
      const factDiv = document.createElement('div');
      factDiv.className = 'fact-container';
      factDiv.innerHTML = \`
        <h3>Fact \${factCount}</h3>
        <div class="field">
          <label for="fact-\${factCount}-title">Title:</label>
          <input type="text" id="fact-\${factCount}-title" placeholder="Processing Time" />
        </div>
        <div class="field">
          <label for="fact-\${factCount}-value">Value:</label>
          <input type="text" id="fact-\${factCount}-value" placeholder="2-6 weeks" />
        </div>
      \`;
      document.getElementById('facts-container').appendChild(factDiv);
    }
    
    function generateJSON() {
      const title = document.getElementById('title').value;
      const slug = document.getElementById('slug').value;
      const shortDescription = document.getElementById('shortDescription').value;
      const fullDescription = document.getElementById('fullDescription').value;
      const imageUrl = document.getElementById('imageUrl').value;
      const difficulty = document.getElementById('difficulty').value;
      const timeRequired = document.getElementById('timeRequired').value;
      const tagsString = document.getElementById('tags').value;
      const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
      
      // Get steps
      const steps = [];
      for (let i = 1; i <= stepCount; i++) {
        const stepTitle = document.getElementById(\`step-\${i}-title\`).value;
        const stepDescription = document.getElementById(\`step-\${i}-description\`).value;
        const stepImageUrl = document.getElementById(\`step-\${i}-imageUrl\`).value;
        
        const step = {
          title: stepTitle,
          description: stepDescription
        };
        
        if (stepImageUrl) {
          step.imageUrl = stepImageUrl;
        }
        
        steps.push(step);
      }
      
      // Get facts
      const facts = [];
      for (let i = 1; i <= factCount; i++) {
        const factTitle = document.getElementById(\`fact-\${i}-title\`).value;
        const factValue = document.getElementById(\`fact-\${i}-value\`).value;
        
        facts.push({
          title: factTitle,
          value: factValue
        });
      }
      
      // Create guide object
      const guide = {
        id: slug,
        title,
        slug,
        shortDescription,
        fullDescription,
        difficulty,
        timeRequired,
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0],
        tags,
        steps
      };
      
      if (imageUrl) {
        guide.imageUrl = imageUrl;
      }
      
      if (facts.length > 0) {
        guide.facts = facts;
      }
      
      // Output JSON
      document.getElementById('output').value = JSON.stringify(guide, null, 2);
    }
    
    // Add initial step and fact
    addStep();
    addFact();
  </script>
</body>
</html>`;

  // Create a blob from the HTML template
  const blob = new Blob([template], { type: 'text/html;charset=utf-8' });
  
  // Save the file
  saveAs(blob, `how-to-guide-template.html`);
};

