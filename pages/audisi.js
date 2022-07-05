import { Accordion } from 'react-bootstrap'
import Image from 'next/image'
import Head from 'next/head'



const Audisi = () => {

    return (
        <>
            <Head>
                <title>Pendaftaran Audisi Senjafest</title>
                <meta name='description' content='Pendaftaran Audisi Senja Fest 2022 Chapter Bromo Roadshow Audition, Biaya pendaftaran sebersar Rp. 200.000,- , paling lambat 14 Juli 2022 (Kepanjen Audition), 20 Juli 2022 (Malang Audition), 26 Juli 2022 (Probolinggo Audition) ' />
                <meta name='keywords' content='pendaftaran senjafest, audisi senjafest, senjafest in.id, senjafest audisi, Roadshow audition, senjafest chapter bromo, ' />
                <meta property='og:title' content='pendaftaran audisi senjafest' />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <section
            >
                <div className="audisi-background">
                    <Image
                        priority={true} width={1300} height={800}
                        src='/audition.jpeg' alt="audisi senjafest 2022" />
                </div>
                <svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="rgb(5,52,43)" fillOpacity="1" d="M0,288L120,256C240,224,480,160,720,138.7C960,117,1200,139,1320,149.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
                <div className="container-audisi">

                    <div className="audisi-title">
                        <h3>Audisi Senja Fest</h3>
                        <h2>Senja Fest 2022 - Chapter Bromo</h2>
                        <h4>Roadshow Audition</h4>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(5,52,43)" fillOpacity="1" d="M0,160L120,181.3C240,203,480,245,720,218.7C960,192,1200,96,1320,48L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                <div className="Accordion-pendaftaran">
                    <Accordion defaultActiveKey="0" flush >
                        <Accordion.Item eventKey="0" className='panel-item'>
                            <Accordion.Header className='panel-header'> <h5> I. PENDAFTARAN</h5> </Accordion.Header>
                            <Accordion.Body className='panel-body'>
                                <ol>
                                    <li>Biaya pendaftaran sebersar Rp. 200.000,- , paling lambat 14 Juli 2022 (Kepanjen Audition), 20 Juli 2022 (Malang Audition), 26 Juli 2022 (Probolinggo Audition) formulir pendaftaran bisa diisi melalui web site www.inkara.id  atau menghubungi official CS Senja Fest di 0811 1111 0358</li>
                                    <li>Pembayaran hanya dilakukan melalui rekening resmi PT. INKARA
                                        - BCA : 2801968700 - PT INKARA
                                        - Mandiri : 13.000-5151.3334 - PT INKARA</li>
                                    <li>Setelah melakukan pendaftaran dan mengirimkan bukti transaksi pendaftaran, peserta audisi akan mendapatkan nomor registrasi dan no urut peserta (setiap titik audisi hanya akan menerima maksimal 40 band di tiap venue nya) </li>
                                    <li>Ketentuan lain yang belum tertera akan diatur kemudian oleh pihak panitia sesuai situasi dan kondisi yang berlaku pada saat acara berlangsung.</li>

                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='panel-item'>
                            <Accordion.Header className='panel-header'><h5>II. KEHADIRAN</h5></Accordion.Header>
                            <Accordion.Body className='panel-body'>
                                <ol>
                                    <li>Hadir paling lambat 30 menit sebelum acara dimulai.</li>
                                    <li>Wajib mengkonfirmasi kehadiran kepada panita Road Show Audition Senja Fest 2022</li>
                                    <li>Bagi peserta yang membawa alat musik pribadi, memberikan daftar barang bawaan kepada panitia pada saat konfirmasi.</li>
                                    <li>Peserta yang terlambat datang atau tidak hadir dinyatakan mengundurkan diri dan didiskualifikasi.</li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='panel-item'>
                            <Accordion.Header className='panel-header'><h5>III. PENAMPILAN </h5></Accordion.Header>
                            <Accordion.Body className='panel-body'>
                                <ol>
                                    <li>Peserta stand by di belakang panggung paling lambat 5 menit sebelum tampil dan sudah mempersiapkan alat masing-masing.</li>
                                    <li>Jika dalam waktu 10 menit sebelum peserta di panggil tidak hadir, maka akan di anggap mengundurkan diri.</li>
                                    <li>Perserta membawakan 1 buah lagu wajib cover dari salah satu performers di acara Senja Fest 2022 chapter bromo. dengan durasi 5 menit.</li>
                                    <li>Panitia akan memberitahukan sisa waktu kepada peserta yang tampil 1 menit sebelum durasi berakhir.</li>
                                    <li>Panitia berhak meng-cut apabila peserta melewati batas waktu yang ditentukan.</li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='panel-item'>
                            <Accordion.Header className='panel-header'><h5>IV. MATERI LAGU </h5></Accordion.Header>
                            <Accordion.Body className='panel-body'>
                                <ol>
                                    <li>Lagu yang dibawakan adalah cover song dari Performers di acara Senja Fest 2022 - chapter bromo. Antara lain : Danilla Riyadi, Fiersa Besari, Danar Widianto, Endah Rhesa, Adhitia Sofyan, Rivaldi.</li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='panel-item'>
                            <Accordion.Header className='panel-header'><h5>V. PENILAIAN </h5></Accordion.Header>
                            <Accordion.Body className='panel-body'>
                                <ol>
                                    <li>Penilaian dilakukan oleh 3 orang juri,</li>
                                    <li>Dasar penilaian meliputi :
                                        <ul className='listyle'>
                                            <li>Performance (aksi panggung, interaksi, kostum)</li>
                                            <li>Skills (kreatifitas, improvisasi)</li>
                                            <li>Harmonisasi (musikalitas, arransemen, kekompakan)</li>
                                            <li>Keputusan juri adalah mutlak dan tidak dapat diganggu gugat</li>
                                        </ul>
                                    </li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='panel-item'>
                            <Accordion.Header className='panel-header'><h5>VI. PERATURAN  UMUM </h5></Accordion.Header>
                            <Accordion.Body className='panel-body'>
                                <ol>
                                    <li>Dilarang menampilkan atau mempertontonkan aksi panggung yang berbau SARA, politik atau pornoaksi.</li>
                                    <li>Dilarang membuat keributan atau memprovokasi pada saat tampil dan selama acara berlangsung.</li>
                                    <li>Dilarang membawa obat-obatan terlarang, minuman keras, ataupun benda tajam/berbahaya lainnya pada saat tampil dan selama acara berlangsung.</li>
                                    <li>Peserta wajib menjaga ketertiban, kenyamanan, kebersihan dan kelancaran acara.</li>
                                    <li>Peserta bersaing secara sehat tanpa ada tekanan dari pihak manapun atau intimidasi kepada peserta lainnya</li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" className='panel-item'>
                            <Accordion.Header className='panel-header'><h5>VII. KHUSUS </h5></Accordion.Header>
                            <Accordion.Body className='panel-body'>
                                <ol>
                                    <li>Peserta berhak membawa crew, supporter, fans, atau massa.</li>
                                    <li>Peserta yang membawa supporter, fans, atau massa wajib mengkoordinir massanya untuk menjaga ketertiban, kenyamanan dan kelancaran acara.</li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7" className='panel-item'>
                            <Accordion.Header className='panel-header'><h5>VIII. SANKSI </h5></Accordion.Header>
                            <Accordion.Body className='panel-body'>
                                Peserta yang dinilai melanggar peraturan dan ketentuan yang berlaku dinyatakan gugur atau didiskualifikasi.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8" className='panel-item'>
                            <Accordion.Header className='panel-header'><h5>IX. PENGHARGAAN </h5></Accordion.Header>
                            <Accordion.Body className='panel-body'>
                                <ol>
                                    <li>Setiap titik audisi hanya akan diambil 1 pemenang.</li>
                                    <li>Pemenang audisi akan mendapatkan kesempatan untuk menjadi band pembuka di acara Senja Fest 2022 chapter bromo yang akan diadakan di Amphiteater Jiwa Jawa Bromo, tanggal 27 Agustus 2022 dan uang cash sebesar Rp 1.000.000</li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <center><button className="button"><a href="https://wa.link/lsmqeo" target="_blank" rel="noopener noreferrer">DAFTAR SEKARANG</a></button></center>
                </div>

            </section>
        </>
    )
}

export default Audisi