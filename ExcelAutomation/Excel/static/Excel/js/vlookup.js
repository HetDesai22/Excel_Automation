const fileInputs = ['file1', 'file2', 'file3', 'file4', 'file5'];
const fileList = document.getElementById('file-names');

fileInputs.forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener('change', () => {
        fileList.innerHTML = '';
        fileInputs.forEach(fid => {
            const f = document.getElementById(fid).files[0];
            if (f) {
                const li = document.createElement('li');
                li.textContent = f.name;
                fileList.appendChild(li);
            }
        });
    });
});