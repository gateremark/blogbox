"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import testImg from "@/app/assets/blogimg.png";
import Image from "next/image";

const Page = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className=" relative bg-gradient-to-b from-[#d6dbdc] to-[#ffffff] dark:from-[#000000] dark:to-[#121212] h-fit px-16 lg:px-60 md:px-44 sm:px-24 xl:px-72 flex flex-col gap-3">
            <div className="h-60 flex gap-2 items-center mt-6">
                <div className="absolute top-10 left-0 w-fit flex gap-1 items-center">
                    <h1 className=" ml-5">Incomplete...</h1>
                    <Link
                        href="/blogs"
                        className="hover:bg-[#cacaca] dark:hover:bg-[#4e4e4e] flex justify-center items-center text-xl gap-2 px-2 py-3 rounded-md transition duration-200 ease-in-out"
                        title="Blogs"
                    >
                        {" "}
                        <MdArrowBack />
                        Go back
                    </Link>
                    {theme === "dark" ? (
                        <button
                            className="hover:bg-[#4e4e4e] px-2 py-2 rounded-md transition duration-200 ease-in-out"
                            onClick={() => setTheme("light")}
                            title="Light Mode"
                        >
                            <FiSun className="text-2xl" />
                        </button>
                    ) : (
                        <button
                            className="hover:bg-[#4e4e4e] px-2 py-2 rounded-md transition duration-200 ease-in-out"
                            onClick={() => setTheme("dark")}
                            title="Dark Mode"
                        >
                            <FiMoon className="text-2xl" />
                        </button>
                    )}
                </div>
                <Image src={testImg} alt="testimg" className=" w-full h-full" />
            </div>

            <div className=" flex flex-col gap-2">
                <div className="">
                    <h1 className="w-full text-5xl bg-transparent font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF] resize-none">
                        Blog Title
                    </h1>
                </div>
                <div className="">
                    <h2 className="w-full text-2xl bg-transparent font-semibold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF] resize-none">
                        Subtitle
                    </h2>
                    <p>
                        Sample Blog Body <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur officiis quia facilis cupiditate. Illo
                        repudiandae dolore dolorem libero quos aspernatur quod
                        est? Ex fuga quod qui saepe aut, harum atque? Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit.
                        Laboriosam aperiam accusamus nemo in eveniet laudantium
                        corporis aspernatur ex blanditiis doloribus, tenetur
                        sit. Est dolore at provident soluta fuga explicabo,
                        corporis mollitia non possimus deserunt quasi excepturi
                        earum culpa officiis distinctio perspiciatis impedit
                        ipsum autem inventore saepe ut! Facilis magni a in
                        provident dolorum quasi dolores, minus atque
                        voluptatibus accusantium maiores delectus placeat culpa
                        suscipit nihil alias ab, possimus earum. Ipsa, quae
                        accusamus numquam reiciendis facere quibusdam eveniet
                        atque soluta sit aliquam, amet explicabo sapiente! Enim
                        nostrum dolorem sed omnis veritatis, eaque velit
                        provident ab accusantium qui quo. Quod ex dolorem
                        similique asperiores ducimus vitae itaque reiciendis
                        obcaecati, sit earum iste, ut sint recusandae. Aperiam,
                        aspernatur? Eos, rerum. Sequi consequatur fugit quas
                        quos pariatur deleniti architecto nisi mollitia,
                        explicabo iste aspernatur incidunt id excepturi ipsam,
                        ab facilis aliquam, commodi quaerat debitis cumque
                        impedit enim! Laborum, repellendus quae. Fugiat,
                        consequuntur? Id architecto voluptas repudiandae aut
                        rerum molestiae voluptatibus, libero cum saepe dolores
                        ab aperiam pariatur dignissimos, consequatur excepturi
                        eligendi sit, esse ipsam molestias debitis doloribus at
                        dolor nam facere! Blanditiis illum magnam, officiis aut
                        rem dolores cum minima ut nemo quae facere deserunt
                        nostrum hic sint, eum error ex. Adipisci tempore ut
                        corrupti tenetur quasi voluptate repellendus, dolores
                        reprehenderit beatae saepe sint, maxime incidunt neque
                        quae labore recusandae earum illo harum quia odit
                        inventore! Ducimus quod nostrum ratione nesciunt commodi
                        in explicabo possimus unde illo, excepturi nobis, vitae
                        inventore maiores nulla corrupti porro autem animi ad
                        nihil architecto accusamus! Eum quisquam asperiores sed,
                        dolor possimus, illo eveniet optio itaque et officia
                        nesciunt nisi voluptatibus libero blanditiis dicta
                        temporibus in repellat numquam. Aliquid delectus
                        excepturi voluptatem, architecto ab ipsam placeat et rem
                        assumenda consectetur quos molestias a error quae ipsum
                        quidem quia, labore aperiam. Est iste animi eius nam
                        earum consectetur atque. Sequi expedita quos ad, nihil
                        laudantium assumenda quam officia animi, enim deserunt
                        reiciendis! Ad voluptatibus sunt doloribus qui nihil
                        dicta eveniet magni, magnam quasi est veritatis,
                        recusandae repellendus adipisci molestiae! Ullam,
                        voluptas. Ipsam unde facere facilis, minus non earum,
                        deleniti accusamus quod fugit cupiditate incidunt dolor
                        iusto nihil, laboriosam ea in. Corrupti, inventore sint.
                        Minima deleniti possimus necessitatibus provident ad,
                        inventore quo molestiae nihil dolorem laboriosam
                        veritatis consequatur eaque mollitia quisquam corrupti
                        doloribus at? Reprehenderit asperiores debitis iure nisi
                        doloribus, quos et quo deserunt quisquam ad corrupti
                        dolorem quam facilis maiores vel. Asperiores, maiores
                        molestiae. Fuga nemo sint assumenda voluptatem eveniet
                        natus temporibus corporis in iure, nesciunt debitis
                        praesentium voluptatum distinctio cupiditate amet modi
                        neque at dolorum molestias illo atque quam nulla ex.
                        Sequi sint ad commodi accusamus facilis assumenda
                        laudantium molestiae rem corrupti? Voluptatibus cumque
                        suscipit quas at veniam doloribus consequuntur! Amet
                        cumque dignissimos quam necessitatibus numquam? Aperiam
                        autem ullam dolore natus adipisci laudantium
                        reprehenderit culpa iure suscipit ad sapiente ipsum
                        libero alias eum veritatis soluta minima id nam
                        asperiores incidunt, illum excepturi at quod. Asperiores
                        ducimus quam neque, vel minima commodi quas sequi
                        nesciunt quae nisi consequuntur porro obcaecati, aperiam
                        magni modi quaerat! Laudantium debitis itaque quam
                        repellat, quasi ab aspernatur consequatur reprehenderit
                        quos pariatur est porro temporibus rem! Architecto
                        explicabo dolore minus fugit quo error, ab voluptatibus
                        rem, facilis quisquam vel numquam velit laudantium nihil
                        veniam? Iste, atque expedita? Sed fuga inventore aliquid
                        accusantium? Necessitatibus non laboriosam magnam,
                        tempore repudiandae eligendi numquam ab dicta sequi nam?
                        Laborum delectus praesentium quidem, alias molestias
                        inventore ipsam impedit consequatur, nihil iste expedita
                        mollitia possimus quos dolore esse molestiae architecto
                        aliquam deleniti. Esse dolorum aut ipsa vero quos
                        dignissimos dicta obcaecati, pariatur ex quo nobis
                        possimus quis labore quia cumque corporis voluptatum
                        doloremque atque voluptatibus distinctio minima.
                        Deserunt assumenda, et laboriosam ratione veritatis
                        magni officiis modi numquam suscipit beatae quas, neque
                        maxime consectetur nostrum repellat saepe architecto
                        hic! Fugiat autem, sint harum accusamus reiciendis
                        consequuntur laudantium optio ducimus quia at esse
                        perferendis cupiditate dolorum cum vero aspernatur
                        exercitationem necessitatibus voluptate? Rem, ipsam
                        ratione? Perferendis odio eveniet reprehenderit quisquam
                        ducimus repellat illum necessitatibus numquam
                        aspernatur! Quod, vitae? Officiis eveniet neque
                        consequatur ratione quo ea possimus cupiditate expedita
                        doloremque a mollitia natus error necessitatibus,
                        pariatur accusamus. Rem aliquam expedita totam labore
                        quasi dolorem, assumenda facere laudantium? Itaque animi
                        quod, nulla ea obcaecati, facere ratione eligendi
                        voluptatum assumenda officia odit. Reiciendis nemo alias
                        neque dolores itaque. Iste quia debitis quibusdam
                        corrupti exercitationem dolore atque blanditiis culpa
                        beatae amet, cum aut distinctio voluptatem, accusamus
                        ducimus dolorum! Perferendis quam est minima ipsa sunt
                        dolor alias id nemo quia omnis, nisi consectetur eveniet
                        doloremque quidem laudantium temporibus quos suscipit
                        illo tempore vero sequi optio expedita? Laboriosam nam
                        iusto numquam vel laborum delectus minus reprehenderit
                        libero, impedit voluptatum at quia praesentium officia
                        accusantium! Non laboriosam molestias, consequuntur
                        quisquam ut beatae nesciunt, pariatur, similique libero
                        vitae placeat reiciendis itaque eos recusandae quis
                        facere unde aperiam doloremque eveniet saepe quaerat
                        ipsam numquam voluptas veniam? Saepe quae possimus
                        inventore distinctio ipsam vitae repellat eos optio
                        error illum totam dignissimos nobis consectetur at hic
                        cumque deserunt, voluptates sit repellendus iste minus.
                        Id voluptatibus ut minus suscipit, neque, totam cum
                        perferendis ad explicabo facilis in. Laborum iste nobis
                        nesciunt aspernatur odit error maiores, numquam eos et
                        necessitatibus, culpa asperiores facilis porro dolorum
                        suscipit cupiditate ut natus repudiandae velit ipsam.
                        Deleniti veritatis sequi non dolor quod, minima
                        excepturi, laboriosam facilis magnam omnis impedit quo
                        modi voluptates quidem voluptas! Obcaecati explicabo
                        maiores nobis nulla voluptas consequatur nihil enim
                        commodi amet ab, et laboriosam dolore quam dolorem.
                        Neque quibusdam excepturi voluptate. Consequatur
                        laudantium optio tenetur possimus iusto dolorem, vitae
                        vel! Autem amet porro tempora! Aliquam ea eum
                        repellendus dolore obcaecati harum nobis sint inventore
                        laudantium, quam dolorum, repudiandae maiores, ab
                        libero. Ducimus illum sit aspernatur illo. Quam
                        accusamus expedita magni distinctio in nulla facilis,
                        minus, ut excepturi ratione ullam repellat, veniam
                        necessitatibus alias iste! Nihil error fugiat ut esse
                        tenetur deserunt odit eum ipsum beatae veniam, molestias
                        unde illum in voluptatibus, deleniti doloremque porro
                        eligendi voluptatum enim accusamus suscipit! Repudiandae
                        modi incidunt accusantium consequuntur, porro molestias
                        iste dolorum consequatur hic libero consectetur dolore
                        aliquam nulla corporis id a adipisci dicta laborum
                        dignissimos explicabo voluptatem voluptates ea? Ea!
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet repudiandae, explicabo quam dolore rem error!
                        Aliquid tenetur dignissimos itaque quidem architecto
                        repellat exercitationem odio beatae magnam quos, dolores
                        veritatis ipsam impedit cumque aut ipsa blanditiis
                        laborum dolorem non nam quisquam! Facere ex neque enim,
                        totam voluptatibus numquam odio dignissimos expedita
                        assumenda repudiandae in sequi commodi consectetur
                        doloribus ea qui obcaecati eveniet quod autem nostrum
                        sit explicabo. Impedit deserunt placeat nesciunt
                        veritatis, laudantium dignissimos consequatur incidunt
                        ab quibusdam tempora explicabo, sunt nam neque ipsa
                        velit molestiae corrupti quas. Sequi dolorem vitae
                        voluptatem cum fuga minima unde ad at ipsam harum, sint
                        itaque velit quisquam autem cumque, modi laborum? Minus
                        repellat debitis placeat soluta accusantium error
                        laboriosam, perferendis laborum dicta repellendus fugit
                        totam inventore at recusandae libero suscipit
                        voluptatibus. Molestias atque, voluptate corporis nulla
                        omnis, non velit, repudiandae nostrum commodi animi
                        mollitia quibusdam quae adipisci hic. Nostrum placeat
                        natus rem repellendus a ab modi omnis aspernatur aliquam
                        ipsa quis facere deleniti sit veniam non inventore quasi
                        maiores sint praesentium error quia fugiat earum,
                        voluptas temporibus. Quae autem soluta rem. Hic ab iusto
                        magni consectetur, natus nulla quaerat asperiores harum
                        saepe repudiandae laboriosam rem obcaecati numquam
                        adipisci? Deleniti, corporis possimus. Sequi neque enim
                        quaerat nulla, vel laborum necessitatibus accusantium,
                        at eos debitis cum mollitia? Aperiam sunt labore
                        mollitia quia aspernatur ab culpa similique perferendis
                        quisquam quae! Dignissimos nihil natus temporibus
                        tempore, libero veritatis. Dignissimos eius enim totam.
                        Laudantium earum rerum nisi aliquam, est natus ipsa,
                        quaerat ut a repellendus culpa beatae fugiat hic
                        deserunt officia. Facere sed atque consequuntur quia sit
                        saepe omnis quam delectus beatae aperiam, veniam ex at
                        ab necessitatibus praesentium nostrum est eligendi porro
                        exercitationem fugiat, cupiditate modi asperiores
                        deleniti? Ipsam at fugiat commodi debitis eum molestiae
                        architecto, similique, adipisci voluptatibus harum
                        pariatur voluptatem odio minus sequi accusantium
                        perferendis porro. Placeat nihil, ratione excepturi
                        minima soluta quia sit odit voluptatum ullam quae, qui
                        in consectetur corporis exercitationem debitis fugit
                        molestiae dolore voluptatem! Eum voluptatum quo, maiores
                        est officia dolore culpa minima iure necessitatibus quod
                        vitae eos commodi facilis autem, velit praesentium a
                        soluta distinctio at. Magni totam, molestiae ratione
                        magnam porro doloribus minima aut commodi dolore qui
                        voluptate maiores cupiditate ducimus ut voluptatem
                        corrupti sed laudantium eligendi quam distinctio nobis
                        veniam, excepturi, consequuntur ad? Cum, error.
                        Voluptatem cum ratione totam illo, nulla veritatis vel
                        sit, quas quo pariatur consequatur quae. Similique sequi
                        tempore totam ducimus veritatis exercitationem? Maxime
                        aspernatur molestias, delectus consequuntur rem dolorum
                        itaque animi qui fugiat similique vitae commodi tempore
                        dolore neque natus minima magnam corrupti nihil
                        molestiae consequatur illum ex ducimus? Rerum, in autem
                        deleniti a, atque vel debitis modi quo alias quas
                        laboriosam dolorem nihil voluptatum iste facilis sunt
                        repudiandae! Facilis et molestiae cupiditate, modi, quos
                        esse officia consectetur voluptatibus dolor alias a
                        sequi? Cumque, praesentium hic. Quisquam earum nisi vero
                        magni tempora explicabo impedit aspernatur iste eius
                        velit, natus reprehenderit adipisci est itaque corrupti!
                        Placeat cupiditate expedita reiciendis corporis earum
                        laborum delectus perspiciatis, qui cum saepe labore
                        mollitia magnam excepturi quaerat. Voluptatem, repellat
                        consectetur libero, necessitatibus, quos nam sit
                        consequuntur aliquam dicta dolor quam ad labore debitis
                        tenetur sint sequi incidunt delectus nostrum ex?
                        Recusandae minus minima assumenda, quis dolorem aperiam
                        impedit accusantium, optio officia quas non ut
                        consequuntur voluptate iusto nostrum illum. Modi
                        repellendus tenetur mollitia maxime aperiam nemo
                        repellat error blanditiis, illum ea quam assumenda id
                        tempora? Nam architecto rem repellat odio cupiditate est
                        excepturi, labore ducimus sequi, mollitia cum voluptas.
                        Porro, nemo dignissimos quos repudiandae quam iste nobis
                        molestias. Veniam deserunt aperiam quisquam sit id earum
                        ad vitae iure sed impedit voluptates nobis porro
                        repellat animi natus quae fuga et, deleniti ea tempora
                        dolore quidem ullam neque modi? Dolorem delectus at
                        labore pariatur iure. Iusto praesentium, dolorem id rem
                        molestiae magni corporis! Nam commodi corrupti vero ex
                        sed modi ad illum aut magni ea quia tenetur eligendi
                        deleniti explicabo accusamus repellat eos vel, aperiam
                        ipsum ab est? Sit necessitatibus dolores atque
                        laboriosam sapiente tempora rem blanditiis commodi
                        officia ullam porro ratione dolorem laudantium, fugiat
                        voluptatum earum suscipit praesentium! Quis eaque
                        soluta, distinctio voluptate numquam pariatur explicabo!
                        Reiciendis error quibusdam consectetur expedita alias
                        quae ipsam nulla minima, exercitationem facere
                        perferendis, hic enim minus odit necessitatibus.
                        Praesentium perferendis fugit, ratione repudiandae
                        consectetur vitae aliquam commodi pariatur suscipit
                        nobis nulla consequuntur assumenda itaque, quos corrupti
                        veniam maiores, velit voluptate iusto non incidunt earum
                        eos fugiat sunt. Praesentium deleniti optio non
                        provident fugiat est aperiam vero inventore! Praesentium
                        cumque animi amet accusantium voluptas dolorum, nostrum
                        deleniti illum eligendi dolore necessitatibus voluptate
                        quidem quia blanditiis obcaecati odio perspiciatis
                        molestias neque! Id, nulla. Nam, rerum ea? Nemo
                        inventore pariatur tempore ex eaque recusandae, eveniet
                        deleniti? Tempore blanditiis beatae nam, et quam
                        consequuntur nesciunt natus cupiditate inventore
                        distinctio quisquam veritatis, quos amet cumque
                        temporibus optio quibusdam expedita quidem! Maxime cum
                        porro voluptatibus iure officiis doloribus nostrum
                        reprehenderit obcaecati tenetur veniam quis facilis
                        fugit totam, quibusdam optio. Saepe dolore iure nostrum
                        reiciendis quae praesentium quisquam, voluptates
                        perspiciatis corrupti quis neque error nesciunt ducimus
                        sint temporibus ratione ipsam non repudiandae illum
                        reprehenderit ab? Praesentium minus necessitatibus
                        doloribus assumenda ut nostrum officiis sed earum magnam
                        ducimus, cupiditate fuga animi veniam error fugiat eum
                        ipsum, quas qui beatae autem! Ullam, est adipisci
                        aliquid possimus ut veniam necessitatibus iure error
                        nulla eaque laboriosam exercitationem debitis! In vitae
                        pariatur quos veritatis itaque hic? Consequuntur,
                        officia magnam, ipsum esse nesciunt, quia mollitia
                        numquam commodi minima cumque aut. Quia, omnis impedit.
                        Fugiat est laudantium sequi vel nam ipsa ut debitis iure
                        iste impedit exercitationem magni delectus, nihil,
                        pariatur rem! Accusamus deserunt distinctio repellat
                        vero tempora. Culpa neque laboriosam, eos quos maiores
                        sapiente tempora architecto. Non consectetur repellendus
                        illum eaque odit quas nam, mollitia eum nobis nulla
                        inventore perferendis commodi ex natus beatae sint ullam
                        asperiores voluptatem aut assumenda suscipit ab sed?
                        Earum, voluptate id neque rem eligendi non, sapiente,
                        temporibus ad reiciendis iusto expedita asperiores modi
                        molestias? Alias ipsa assumenda cupiditate incidunt quod
                        illo perspiciatis iure corrupti aspernatur deserunt
                        labore aut qui accusantium, nihil saepe voluptatum
                        maxime quia quisquam repellendus illum suscipit odit
                        ullam animi. Autem, consequatur.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
