
const EXTENSION_ID = "jofhfoigapieoghaechnkdmgkjnflipn"; 

window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const titleElement = document.getElementById('title');
  const msgElement = document.getElementById('msg');

  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
    
    chrome.runtime.sendMessage(EXTENSION_ID, { action: "activatePremium" }, (response) => {
      
      if (chrome.runtime.lastError) {
        loader.style.display = "none";
        titleElement.innerHTML = "Falha na Sincronização";
        titleElement.style.color = "#ef4444";
        msgElement.innerHTML = "Não conseguimos localizar a extensão instalada. Verifique se o plugin está ativo neste navegador e recarregue a página.";
        return;
      }

      if (response && response.success) {
        loader.style.display = "none";
        titleElement.innerHTML = "✨ Acesso Premium Liberado!";
        titleElement.style.color = "#10b981";
        msgElement.innerHTML = "Sua extensão foi atualizada com sucesso para a versão ilimitada. Você já pode fechar esta aba e baixar seus vídeos sem limites.";
      } else {
        loader.style.display = "none";
        titleElement.innerHTML = "Erro na Validação";
        msgElement.innerHTML = "O pagamento foi processado, mas a validação interna do navegador falhou.";
      }
    });

  } else {
    loader.style.display = "none";
    titleElement.innerHTML = "Navegador Incompatível";
    titleElement.style.color = "#ef4444";
    msgElement.innerHTML = "Extensão não encontrada. Para que o acesso seja liberado, você deve abrir esta página usando o navegador Google Chrome onde instalou o plugin.";
  }
});