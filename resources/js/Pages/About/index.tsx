import { Head } from "@inertiajs/react";

import Layout from "@/Layouts/Layout";
import { TitleText, SubtitleText } from "@/Components/typography";
import { bankProps } from "@/types/bank";
import { servicesProps } from "@/types/services";

export default function About({
    banks,
    services,
}: {
    readonly banks: bankProps;
    readonly services: servicesProps[];
}) {
    return (
        <Layout banks={banks} services={services}>
            <Head title="About" />

            {/* Section: About */}
            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16">
                <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4">
                    <TitleText>About</TitleText>
                    <SubtitleText>
                        Kami hadir untuk memenuhi kebutuhan pemotongan plastik
                        berkualitas tinggi dengan teknologi modern.
                    </SubtitleText>
                </div>
            </section>

            {/* Section: Visi & Misi */}
            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16 bg-gray-100">
                <div className="container px-4 md:px-6 mx-auto space-y-8 text-center">
                    <TitleText>Visi & Misi</TitleText>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold text-[#342C89]">
                                Visi
                            </h3>
                            <p className="text-gray-600 mt-4">
                                Menjadi perusahaan terdepan dalam industri pemotongan plastik yang 
                                ramah lingkungan dan inovatif, memberikan solusi terbaik bagi pelanggan.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold text-[#342C89]">
                                Misi
                            </h3>
                            <ul className="text-gray-600 mt-4 list-disc list-inside text-left mx-auto max-w-lg">
                                <li>Menggunakan teknologi mutakhir dalam pemotongan plastik.</li>
                                <li>Memberikan layanan berkualitas tinggi kepada pelanggan.</li>
                                <li>Meningkatkan efisiensi dan keberlanjutan dalam produksi.</li>
                                <li>Memastikan kepuasan pelanggan dengan pelayanan profesional.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Bidang Keunggulan */}
            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16">
                <div className="container px-4 md:px-6 mx-auto space-y-8 text-center">
                    <TitleText>Bidang Keunggulan</TitleText>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Kami menawarkan berbagai keunggulan bisnis yang membedakan kami dari pesaing.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold text-[#342C89]">
                                Teknologi Canggih
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Menggunakan mesin terbaru untuk hasil potongan yang presisi dan efisien.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold text-[#342C89]">
                                Ramah Lingkungan
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Mengoptimalkan penggunaan bahan baku dan mengurangi limbah plastik.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold text-[#342C89]">
                                Harga Kompetitif
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Memberikan harga terbaik dengan kualitas layanan premium.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Tentang Agen & Pabrik */}
            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16 bg-gray-100">
                <div className="container px-4 md:px-6 mx-auto space-y-8 text-center">
                    <TitleText>Tentang UD. Jambu Plastik</TitleText>

                    <p className="text-gray-600 max-w-3xl mx-auto">
                        UD. Jambu Plastik adalah perusahaan yang bergerak di bidang pemotongan plastik dengan teknologi terkini. 
                        Kami memiliki agen yang tersebar luas untuk memenuhi kebutuhan pelanggan di berbagai daerah.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold text-[#342C89]">
                                Pabrik Pemotongan Plastik
                            </h3>
                            <p className="text-gray-600 mt-4">
                                Berlokasi strategis, pabrik kami didukung oleh teknologi mutakhir yang memastikan hasil pemotongan
                                plastik dengan kualitas terbaik dan presisi tinggi.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold text-[#342C89]">
                                Jaringan Agen
                            </h3>
                            <p className="text-gray-600 mt-4">
                                Kami memiliki agen yang siap melayani berbagai permintaan pelanggan di seluruh Indonesia,
                                memastikan produk kami tersedia dengan cepat dan mudah.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
