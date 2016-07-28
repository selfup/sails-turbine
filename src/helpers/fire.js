class Fire {
    fire(that, csvFile) {
      csvFile.addEventListener('change', () => {
        const file = csvFile.files[0]
        let reader = new FileReader()
        reader.onload = function(e) {
          let files = that.state.files 
          files.push(reader.result)
          that.setState({files: files})
        }
        reader.readAsText(file)
      })
    }
}

export default Fire
