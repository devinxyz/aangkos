import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default function Example() {
    return (
        <>
        <Navbar/>
        {/* 1 */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 lg:w-20 lg:h-20">
          <svg
            className="w-10 h-10 text-deep-purple-accent-400 lg:w-16 lg:h-16"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
             Syarat dan <br></br> ketentuan umum
              
            </h2>
           
          </div>
          <div className="lg:w-10/12">
            <p className="text-base text-gray-700 text-justify">
            Halo, terima kasih telah mengunjungi situs web (website) mamikos.com atau aplikasi Mamikos (selanjutnya disebut “platform”).

            Platform ini dimiliki dan dioperasikan oleh Mamikos dan afiliasinya (selanjutnya disebut, “Kami”). Kami menyarankan pendatang, pengguna, ataupun pengguna terdaftar (selanjutnya disebut “Anda”) untuk membaca Syarat dan Ketentuan ini secara berkala termasuk juga Kebijakan Privasi yang merupakan bagian yang tidak terpisahkan dari Syarat dan Ketentuan ini karena dapat berdampak kepada hak dan kewajiban Anda di bawah hukum.

            Dengan mengunjungi, menggunakan, mengakses dan/atau mendaftarkan diri Anda pada platform Kami, Anda dianggap telah membaca, mengerti, memahami dan menyetujui seluruh isi yang tertuang dalam Syarat dan Ketentuan (selanjutnya disebut, “S&K”) ini. Jika Anda tidak setuju untuk terikat dengan S&K in maka Anda tidak diperkenankan untuk mengakses dan/atau menggunakan platform Kami. S&K ini merupakan bentuk Perjanjian yang sah dan mengikat antara Anda dengan Kami. 

            </p>
            <p className="text-base text-gray-700 mt-4 text-justify">
            1. Ruang Lingkup

            Untuk menggunakan platform ini Kami menyarankan Anda sudah berusia 18 tahun, apabila Anda berusia dibawah 18 tahun silahkan untuk mengakses maupun menggunakan platform ini dengan pengawasan dari orang tua atau wali Anda. Apabila Anda akan menggunakan platform ini maka:

            a. Anda menjamin kebenaran dan keaslian segala informasi yang akan Anda masukkan, sediakan dan daftarkan pada platform serta menjamin dan memiliki hak untuk membagikan, menyebarkan  dan menyalurkan segala informasi yang dimasukkan dan daftarkan. Lebih lanjut setiap informasi tersebut bukan dikategorikan atau terikat pada ketentuan mengenai informasi rahasia antara Anda dan pihak lainnya yang tidak diperbolehkan disebarluaskan.

            b. Anda memahami bahwa setiap pendapat atau komentar yang diungkapkan pada platform ini adalah berasal dari individu yang ditujukan pada konten  tertentu. Pendapat atau komentar tersebut tidak mencerminkan pendapat Kami, oleh karenanya Anda tidak akan mengajukan permintaan ganti rugi ataupun klaim dalam bentuk apapun terhadap Kami sehubungan dengan komentar atau pendapat yang diberikan oleh pihak lain.

            c. Jika Anda memiliki akun yang sudah terdaftar pada platform Kami, Anda bertanggung jawab untuk menjaga kata sandi, tanda identifikasi lain dari akun Anda dan sepenuhnya bertanggung jawab untuk semua aktivitas yang terjadi dengan kata sandi atau akun tersebut. Anda dapat memberitahukan kepada Kami apabila terdapat pemakaian kata sandi atau akun milik Anda tanpa seizin Anda kepada Kami melalui kontak yang tersedia pada platform ini.

            d. Kegagalan dalam memenuhi satu atau lebih ketentuan yang terkandung dalam S&K, Kebijakan Privasi maupun setiap S&K Turunan yang terkandung dan berkaitan dengan fitur, layanan ataupun S&K ini, dapat menyebabkan Anda dituntut baik secara perdata maupun pidana. Lebih lanjut Anda wajib memberikan ganti rugi, memenuhi klaim dan sanksi, maupun permintaan menyelamatkan dan/atau mengamankan Kami terhadap kehilangan atau kerusakan yang terjadi atau diajukan oleh pihak lainnya.

            e. Dalam mengelola platform, Kami menggunakan keahlian dan kemampuan terbaik dari Kami serta selalu memperhatikan dan mempertimbangkan aspek kehati-hatian, namun demikian Kami tidak dapat menjamin bahwa setiap informasi yang diberikan akurat, lengkap, benar atau terbaru tersedia setiap saat, oleh karenanya Kami tidak bertanggung jawab atas kesalahan, kendala, informasi yang tidak akurat, bahkan menyesatkan atau salah yang disampaikan oleh setiap pengguna platform.

            f. Apabila Anda merupakan badan usaha, perusahaan, pengelola kos yang memiliki atau mengelola kos, Anda hanya dapat menggunakan platform melalui skema kerja sama Mamikos for Partner yang dapat Anda temukan pada laman https://mamikos.com/info/partnership/ dan menikmati berbagai keuntungan yang Kami tawarkan. 

            g. Kami memperhatikan dan mengedepankan persaingan usaha yang sehat dan oleh karenanya setiap iklan atau konten yang Anda buat tidak diperkenankan untuk menjatuhkan iklan atau konten pengguna lainnya, menduplikasi isi, konten, gambar, keterangan milik pengguna lain yang tersedia pada platform ini.
            </p>
            <p className="text-base text-gray-700 mt-4 text-justify">
            2. Akun Anda

            Untuk dapat menggunakan secara penuh atau sebagian fitur yang tersedia pada platform Kami, Anda diminta untuk melakukan pendaftaran dan membuat akun pada platform Kami. Untuk kepentingan pendaftaraan ini Kami akan mengumpulkan dan memproses informasi yang Anda berikan termasuk namun tidak terbatas pada identitas diri, informasi alamat surat elektronik (e-mail), nomor handphone maupun informasi lainnya yang harus Anda isikan pada platform. Anda memahami bahwa:

            a. Anda harus menyediakan informasi secara akurat, lengkap, terkini kepada Kami. Anda juga bersedia untuk menyediakan segala bukti yang dapat membuktikan identitas Anda dan informasi yang Anda sampaikan adalah benar dan dibawah kendali Anda.

            b. Setelah Anda memiliki akun pengguna, Anda tidak diperkenankan untuk memindahkan dengan cara apapun akun Anda kepada pihak lain untuk tujuan maupun alasan apapun. Anda harus menjaga keamanan akun Anda dengan kata sandi atau identifikasi apapun yang Kami berikan hanya kepada Anda.

            c. Dalam hal akun Anda telah diambil alih oleh pihak lain tanpa sepengetahuan dan persetujuan Anda, Anda dapat segera melaporkan kepada Kami. Segala penggunaan, transaksi maupun kendali yang dilakukan oleh akun tersebut selama di bawah kontrol pihak lain akan tetap menjadi tanggung jawab Anda.

            d. Kami berhak untuk melakukan pemberhentian, penutupan, penghapusan, pembekuan akun dan iklan milik Anda baik sementara maupun seterusnya apabila terjadi hal-hal yang termasuk namun tidak terbatas pada adanya indikasi pelanggaran, kecurangan (fraud), pencurian maupun penipuan, terjadinya tindakan kriminal maupun tindakan yang dilarang oleh peraturan perundang undangan (non-compliance), transaksi yang mencurigakan, hambatan praktis, ataupun penyalahgunaan posisi, maupun permintaan dari otoritas pemerintah.

            e. Kami tidak akan dengan sengaja menginterupsi, memulai inisiatif untuk memindahkan, atau upaya memaksa Penghuni yang telah menempati properti yang Anda kelola untuk pindah pada Properti lainnya kecuali permintaan pindah tersebut merupakan inisiatif dan permintaan Penghuni atau karena kondisi sebagaimana diatur dalam S&K ini khususnya Butir 7 di bawah ini.
            </p>
            <p className="text-base text-gray-700 mt-4 text-justify">

            3. Harga

            a. Harga yang tertera dalam platform adalah harga yang sesuai dengan keterangan pada masing-masing konten yang ada dan disediakan oleh pengiklan. Kecuali telah dijamin berdasarkan prosedur pembayaran yang telah Kami sediakan, harga mungkin dapat berubah dan perubahan ini bukan merupakan tanggung jawab Kami.

            b. Anda memahami dan menyetujui bahwa apabila terdapat kesalahan harga pada konten yang dapat disebabkan oleh tidak diperbaruinya (update) platform akibat dari browser/ISP maka hal ini merupakan tanggung jawab Anda dan tidak dapat dibebankan pada Kami. 

            c. Anda memahami dan menyetujui bahwa setiap kesalahan informasi harga, jumlah pembayaran, nomor referensi, pilihan metode pembayaran, nomor rekening yang Anda masukkan pada platform termasuk informasi lainnya yang menyebabkan ketidakbenaran/kesesuaian adalah sepenuhnya tanggung jawab Anda. Kesalahan dan kerugian yang ditimbulkan akibat dari kesalahan Anda tidak dapat dimintakan pertanggungjawaban kepada Kami dalam bentuk apapun dan kapanpun.

            
            </p>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-screen-lg gap-8 row-gap-6 sm:mx-auto lg:grid-cols-3">
        <a
          href="Syarat"
          aria-label="View item"
          title="View item"
          className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
        >
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
            <div className="pr-4">
              <h6 className="mb-2 font-semibold leading-5">
              Fitur dan Layanan Lain
              </h6>
              <p className="text-sm text-gray-900">
              Apakah saya bisa mengganti promo yang sedang aktif?
              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
        </a>
        <a
          href="Syarat"
          aria-label="View item"
          title="View item"
          className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
        >
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
            <div className="pr-4">
              <h6 className="mb-2 font-semibold leading-5">
              Fitur dan Layanan Lain
              </h6>
              <p className="text-sm text-gray-900">
              Apa saya bisa mengubah harga sewa setelah saya memasang promo?
              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
        </a>
        <a
          href="Syarat"
          aria-label="View item"
          title="View item"
          className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
        >
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
            <div className="pr-4">
              <h6 className="mb-2 font-semibold leading-5">
              Fitur dan Layanan Lain
              </h6>
              <p className="text-sm text-gray-900">
              Bagaimana cara memasang promo Potongan Harga?
              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
      <Footer/>
      </>
    );
  };