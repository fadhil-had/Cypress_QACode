describe('Sirclo Endpoint Testing', () => {
    it('GET Homepage', () => {
        cy.request('http://qa-interview.srcli.xyz/')
            .then((response) => {
                expect(response.body).to.include('Welcome!'); //Cek struktur apakah ada pesan Welcome
          })
    })

    it('GET Login (Before login)', () => {
        cy.request('http://qa-interview.srcli.xyz/login')
            .then((response) => {
                expect(response.body).to.include('Username','Password');
                // Cek karena belum login apakah ada username dan password
        })
    })
        
    it('GET Data (Before login)', () => {
        cy.request('http://qa-interview.srcli.xyz/data')
            .then((response) => {
                expect(response.status).to.eq(307);
                expect(response.redirectedToUrl).to.eq('http://qa-interview.srcli.xyz/login');
                // Cek redirect to login page
        })
    })

    it('POST Data (Before login)', () => {
          cy.request({
               method: 'POST',
               url: 'http://qa-interview.srcli.xyz/data',
          }).then((response) => { 
                expect(response.status).to.eq(307);
                expect(response.redirectedToUrl).to.eq('http://qa-interview.srcli.xyz/login');
                // Cek redirect to login page
          })
    })

    it('POST Login (Before login)', () => {
          cy.request({
               method: 'POST',
               url: 'http://qa-interview.srcli.xyz/login',
               body: {
                   username : 'root',
                   password : 'root123'
               }
          }).then((response) => { 
                expect(response.status).to.eq(307);
                expect(response.redirectedToUrl).to.eq('http://qa-interview.srcli.xyz/');
                // Cek setelah isi username dan password redirect to home page
          })
    })

    it('GET Login (After login)', () => {
        cy.request('http://qa-interview.srcli.xyz/login')
            .then((response) => {
                expect(response.status).to.eq(307);
                expect(response.redirectedToUrl).to.eq('http://qa-interview.srcli.xyz/');
                // Cek karena sudah login redirect to home page
        })
    })

    it('POST Login (After login)', () => {
        cy.request({
             method: 'POST',
             url: 'http://qa-interview.srcli.xyz/login',
        }).then((response) => { 
              expect(response.status).to.eq(307);
              expect(response.redirectedToUrl).to.eq('http://qa-interview.srcli.xyz/');
              // Cek karena sudah login redirect to home page
        })
    })

    it('GET Data (After login)', () => {
        cy.request('http://qa-interview.srcli.xyz/data')
            .then((response) => {
                expect(response.body).to.include('Pemasukan','Pengeluaran','TimeStamp','Deskripsi','Jumlah');
                // Cek di body ada data tertentu
        })
    })

    it('POST Data (After login)', () => {
          cy.request({
               method: 'POST',
               url: 'http://qa-interview.srcli.xyz/data',
               body: {
                   timestamp : '2018-07-11',
                   deskripsi : 'pemasukan11',
                   jumlah : '11'
               }
          }).then((response) => { 
                expect(response.body).to.include('2018-07-11','pemasukan11','11');
                expect(response.redirectedToUrl).to.eq('http://qa-interview.srcli.xyz/');
                // Cek setelah isi username dan password redirect to home page
          })
    })

    it('POST Logout', () => {
        cy.request({
             method: 'POST',
             url: 'http://qa-interview.srcli.xyz/logout',
        }).then((response) => { 
              expect(response.status).to.eq(307);
              expect(response.redirectedToUrl).to.eq('http://qa-interview.srcli.xyz/');
              // Cek karena sudah login redirect to home page (Seharusnya, tapi di page response nya cuma 200)
        })
    })
})