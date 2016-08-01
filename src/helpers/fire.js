class Fire {
  fire(csvFile) {
    csvFile.addEventListener('change', () => {
      const file = csvFile.files[0]
      
      let reader = new FileReader()
      let files = this.state.files

      reader.onload = e => files.push(reader.result)

      this.setState({files: files})
      reader.readAsText(file)
    })
  }
}

export default Fire
