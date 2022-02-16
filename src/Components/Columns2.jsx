import React, { useState } from 'react'
import styles from "./Columns.module.css";

const initValue = {
        section1: {
            name: "",
            bussiness_idea: "",
            bussiness_stage: "",
        },
        section2: {
            age_of_establishment: "",
        },
        section3: {
            primary_product_service_offered: "",
            offered_to: "",
        },
        section4: {
            secondary_product_service_offered: "",
        },
        section5: {
            processed_products: "",
        },
        section6: {
            relevant_experience: "",
        },
        section7: {
            skill_training: "",
        },
        section8: {
            usp: "",
        },
        section9: {
            establishment_type: "",
            business_area: "",
            business_locality: "",
            city: "",
            infra_ownership: "",
        },
        section10: {
            establishment_area: "",
        },
        section11: {
            reason_for_location: "",
        },
        section12: {
            market_research: "",
        },
        section13: {
            primary_market: "",
        },
        section14: {
            customers: "",
        },
        section15: {
            seasonality: "",
        },
        section16: {
            competition: "",
        },
        section17: {
            suppliers: "",
        },
        section18: {
            marketing_avenues: "",
        },
        section19: {
            scaleup_potential: ""
        },
}

function Columns2() {
    const [data, setData] = useState(initValue);
    let [sentence, setSentence] = useState("");

    function showSentence(data)
    {
         console.log(data, "dat in showsentence");
        for (let key in data)
        {
            // console.log(data[key], "harish1");
            if (!data[key])
            {
                return false;
                }
        }
        return true;
    }


    const handleChange = (sectionName, e) => {
        console.log(sectionName,e,"sectionName and e")
        const { name, value } = e.target;
        const newData = {...data}
        newData[sectionName]={...newData[sectionName], [name]: value}
        setData(newData);      
    }

    return (
        <form>
            

            <div className={styles.MainData}>
                <div className={styles.Headings}>
                <img className={styles.endorseImage} src="https://www.letsendorse.com/images/letsEndorse-Logo-Black-Transparent.png.pagespeed.ce.RkDm7jLjv0.png" alt="/"/>
                <h1>Assignment</h1>
            </div>
                
                <div className={styles.Introduction}>
                    <fieldset>
                        <legend>INTRODUCTION</legend>
                    {/* <h2>Introduction</h2> */}
                  
                <div className={styles.columnData1}>
                    <div className={styles.columnData1a} >
                    <label>Name:</label>
                        <input type="text" name="name" onChange={(e) => handleChange("section1", e)} placeholder='Enter Name' />
                    </div>
                    
                    <div className={styles.columnData1c}>
                    <label>Business Idea:</label>
                        <input type="text" name="bussiness_idea" onChange={(e) => handleChange("section1", e)} placeholder='Enter Bussiness Idea' />
                    </div>

                <div className={styles.columnData1b}>
                <label>Stage of Bussiness:</label>
                    <select name="bussiness_stage" onChange={(e) => handleChange("section1", e)} >
                    <option value="" >Select Business type</option>
                    <option value="Start-up">Start-up</option>
                    <option value="Scale-up">Scale-up</option>
                    </select>
                            {/* {`Hello ${data.name}`} */}
                            <h5>
                                {showSentence(data.section1) && `${data.section1.name} is looking to ${data.section1.bussiness_stage} their business of ${data.section1.bussiness_idea}.`}
                                </h5>
                    </div>
                    
                    </div>
                    <hr></hr>
                <div className={styles.columnData2}>
                    <label>Age of establishment:</label>
                    <input type="number" min="0" max="100" onChange={(e) => handleChange("section2", e)} name="age_of_establishment" placeholder="Enter age of establishment" />
                    <h5>
                            {showSentence(data.section2) && Number(data.section2.age_of_establishment) !== 0 && `This enterprise has been operational since ${data.section2.age_of_establishment} years and has been serving its customers since then.`}
                        </h5>
                       
                    </div>
                     <hr></hr>  
                
                <div className={styles.columnData3}>
                <div className={styles.columnData3a}>
                            <label>Primary Products/
                                <br/>Services offfered:</label>
                        <input type="text" onChange={(e) => handleChange("section3", e)}name="primary_product_service_offered" placeholder="Enter age of establishment" />
                </div>

                <div className={styles.columnData3b}>
                    <label>Offered to:</label>
                                <select onChange={(e) => handleChange("section3", e)} name="offered_to">
                                    <option value="">Select Offer type</option>
                        <option value="End Customers">End Customers</option>
                        <option value="WholeSalers">WholeSalers</option>
                        <option value="Distributors">Disributors</option>
                        <option value="Retailers">Retailers</option>
                            </select>
                            <h5>
                                {showSentence(data.section3) && `This establishment offers products/services like- ${data.section3.primary_product_service_offered} to ${data.section3.offered_to}.`}
                                </h5>
                        </div>
                       
                    </div>
                     <hr></hr>  

                <div className={styles.columnData4}>
                        <label>Secondary Products/
                            <br/>Services offfered:</label>
                        <input type="text" onChange={(e) => handleChange("section4", e)} name="secondary_product_service_offered" placeholder="Enter secondary product service offered" />
                        <h5>
                            {showSentence(data.section4) && `In addition, the enterprise shall also be involved in- ${data.section4.secondary_product_service_offered}`}
                        </h5>
                          
                    </div>
                    <hr></hr>

                <div className={styles.columnData5}>
                    <label>Processed products:</label>
                        <input type="text" onChange={(e) => handleChange("section5", e)} name="processed_products" placeholder="processed products" />
                        <h5>
                            {showSentence(data.section5) && `Other products of the enterprise shall include- ${data.section5.processed_products}`}
                        </h5>
                         
                    </div>
                    <hr></hr> 

                <div className={styles.columnData6}>
                        <label>Years of relevant experience <br />
                            in this field:</label>
                        <input type="number" min="0" max="100" onChange={(e) => handleChange("section6", e)} name="relevant_experience" placeholder="relevant experience" />
                        <h5>
                            {showSentence(data.section5) && Number(data.section6.relevant_experience) !== 0 && `${data.section1.name} has relevant experience of ${data.section6.relevant_experience} years in this field. `}
                        </h5>
                         
                    </div>
                    <hr></hr> 

                <div className={styles.columnData7}>
                    <label>Skill training:</label>
                            <select onChange={(e) => handleChange("section7", e)} name="skill_training">
                                <option value="">Select training type</option>
                        <option value="No formal skill training">No formal skill training</option>
                        <option value="Has formal skill training and certifiate">Has formal skill training and certifiate</option>
                        </select>
                        <h5>
                            {showSentence(data.section7) && data.section7.skill_training !== 'No formal skill training' && `The entrepreneur ${data.section7.skill_training} in this field of work.`}
                        </h5>
                         
                    </div>
                    <hr></hr> 

                <div className={styles.columnData8}>
                    <label>Unique Selling Proposition:</label>
                    <select onChange={(e) => handleChange("section8", e)} name="usp" multiple>
                        <option value="the enterpreneur's experience in this field">the enterpreneur's experience in this field</option>
                        <option value="innovative product/service">innovative product/service</option>
                        <option value="high profit margin">high profit margin</option>
                        <option value="superior customer support">superior customer support</option>
                        <option value="quality and affordable products/service">quality and affordable products/service</option>
                        <option value="high demand in teh target market">high demand in teh target market</option>
                        <option value="abundant supply of raw materials">abundant supply of raw materials</option>
                        <option value="wide range of products/services">wide range of products/services</option>
                        <option value="robust value-chain of the business">robust value-chain of the business</option>
                        <option value="frequency of customer visits">frequency of customer visits</option>
                        </select>
                        <h5>
                            {showSentence(data.section8) && `The enterprise is uniquely positioned because of its - ${data.section8.usp}`}
                        </h5>
                       
                        </div>
                         
                     <hr></hr> 
                
                <h4 className={styles.IntroPara}>
                {showSentence(data.section1) && showSentence(data.section2) && Number(data.section2.age_of_establishment) !== 0 && showSentence(data.section3) && showSentence(data.section4) && showSentence(data.section5) && showSentence(data.section6) && Number(data.section6.relevant_experience) !== 0 && showSentence(data.section7)  && data.section7.skill_training!=='No formal skill training' && showSentence(data.section8) && `${data.section1.name} is looking to ${data.section1.bussiness_stage} their business of ${data.section1.bussiness_idea}.` +  `This enterprise has been operational since ${data.section2.age_of_establishment} years and has been serving its customers since then.` + `This establishment offers products/services like- ${data.section3.primary_product_service_offered} to ${data.section3.offered_to}.`+ `In addition, the enterprise shall also be involved in- ${data.section4.secondary_product_service_offered}.`+ `Other products of the enterprise shall include- ${data.section5.processed_products}.` + `${data.section1.name} has relevant experience of ${data.section6.relevant_experience} years in this field.` + `The entrepreneur ${data.section7.skill_training} in this field of work.` + `The enterprise is uniquely positioned because of its - ${data.section8.usp}.`}
                    </h4>
                     </fieldset>
                </div>
               
                
                {/* {showSentence(data.section1) && `${data.section1.name} is looking to ${data.section1.bussiness_stage} their business of ${data.section1.bussiness_idea}.` &&
                    showSentence(data.section2) && Number(data.section2.age_of_establishment) !== 0 && `This enterprise has been operational since ${data.section2.age_of_establishment} years and has been serving its customers since then.` &&
                    showSentence(data.section3) && `This establishment offers products/services like- ${data.section3.primary_product_service_offered} to ${data.section3.offered_to}.` &&
                    showSentence(data.section4) && `In addition, the enterprise shall also be involved in- ${data.section4.secondary_product_service_offered}` &&
                    showSentence(data.section5) && `Other products of the enterprise shall include- ${data.section5.processed_products}` &&
                    showSentence(data.section6) && Number(data.section6.relevant_experience) !== 0 && `$name has relevant experience of ${data.section6.relevant_experience} years in this field.` && showSentence(data.section7) && data.section7.skill_training !== 'No formal skill training' && `The entrepreneur ${data.section7.skill_training} in this field of work.` &&
                    showSentence(data.section8) && `The enterprise is uniquely positioned because of its - ${data.section8.usp}`} */}

                <div className={styles.Location}>
                    <fieldset>
                        <legend>LOCATION</legend>
                    {/* <h2>Location</h2> */}
                   
                <div className={styles.columnData9}>
                <div className={styles.columnData9a}>
                    <label>Establishment type:</label> 
                                <select onChange={(e) => handleChange("section9", e)} name="establishment_type">
                                    <option  value="">Select type</option>
                        <option value="Factory">Factory</option>
                        <option value="Mill">Mill</option>
                        <option value="Stall">Stall</option>
                        <option value="Boutique">Boutique</option>
                        <option value="Vehicle">Vehicle</option>
                        <option value="Centre">Centre</option>
                        <option value="Store">Store</option>
                        <option value="Farm">Farm</option>
                        <option value="Plant">Plant</option>
                        <option value="Processing Unit">Processing Unit</option>
                        <option value="Shop">Shop</option>
                        <option value="Vending Cart">Vending Cart</option>
                        <option value="Manufacturing Unit">Manufacturing Unit</option>
                    </select>
                </div>

                <div className={styles.columnData9b}>
                    <label>Name of the area:</label>
                    <input type="text" onChange={(e) => handleChange("section9", e)} name="business_area" placeholder="business_area" />
                </div>

                <div className={styles.columnData9c}>
                    <label>Locality of business:</label>
                                <select onChange={(e) => handleChange("section9", e)} name="business_locality">
                                    <option value="">Select Locality</option>
                        <option value="Urban">Urban</option>
                        <option value="Rural">Rural</option>
                        <option value="Semi-Urban">Semi-Urban</option>
                        <option value="Slum">Slum</option>
                    </select>
                    </div>
                    
                    <div className={styles.columnData9e}>
                        <label>City:</label>
                        <input type="text" onChange={(e) => handleChange("section9", e)} name="city" placeholder="Enter City"/>
                </div>

               <div className={styles.columnData9d}>
                    <label>Ownership of infrastructure:</label>
                                <select onChange={(e) => handleChange("section9", e)} name="infra_ownership">
                                    <option value="">Select Infrastructure type</option>
                        <option value="Rented">Rented</option>
                        <option value="Leased">Leased</option>
                        <option value="Self-Owned">Self-Owned</option>
                            </select>
                            <h5>
                                {showSentence(data.section9) && `The ${data.section9.establishment_type} is located in ${data.section9.business_locality} area of ${data.section9.city} in a ${data.section9.infra_ownership} property.`}
                                </h5>
                    </div>
                    </div>
                    <hr></hr>

                 <div className={styles.columnData10}>
                    <label>Establishment area:</label> 
                        <input type="number" min="0" onChange={(e) => handleChange("section10", e)} name="establishment_area" placeholder='Enter establishment area' />
                        <h5>
                            {showSentence(data.section10) && Number(data.section10.establishment_area) !== 0 && `The size of the establishment is ${data.section10.establishment_area} sq.ft.`}
                            </h5>
                    </div>
                    <hr></hr>
                
                <div className={styles.columnData11}>
                    <label>Reason for selecting<br/>this location:</label>
                    <select onChange={(e) => handleChange("section11", e)} name="reason_for_location" multiple>
                        <option value="Nearness of market">Nearness of market</option>
                        <option value="Good footfall">Good footfall</option>
                        <option value="Nearness to source of materials">Nearness to source of materials</option>
                        <option value="Nearness to targeted customer demographics">Nearness to targeted customer demographics</option>
                        <option value="Lesser competition around">Lesser competition around</option>
                        <option value="Access to permit/liscence of operate">Access to permit/liscence of operate</option>
                        <option value="Nearness to suppliers Affordability">Nearness to suppliers Affordability</option>
                        <option value="No rental overheads">No rental overheads</option>
                        <option value="Other such factors">Other such factors</option>
                        </select>
                        <h5>
                            {showSentence(data.section11) && `This locality is selected because of ${data.section11.reason_for_location}.`}
                            </h5>
                    </div>
                    <hr></hr>

                <h4 className={styles.LocationPara}>
                {showSentence(data.section9) && showSentence(data.section10) && Number(data.section10.establishment_area) !== 0 && showSentence(data.section11) && `The ${data.section9.establishment_type} is located in ${data.section9.business_locality} area of ${data.section9.city} in a ${data.section9.infra_ownership} property.` + `The size of the establishment is ${data.section10.establishment_area} sq.ft.` + `This locality is selected because of ${data.section11.reason_for_location}.` }
                        </h4>
                          </fieldset>
                </div>
                
                <div className={styles.TargetMarket}>
                    <fieldset>
                        <legend>TARGET MARKET</legend>
                    {/* <h2>Target Market</h2> */}
                    
                <div className={styles.columnData12}>
                    <label>Market Research:</label>
                            <select onChange={(e) => handleChange("section12", e)} name="market_research">
                                <option value="">Select Research type</option>
                        <option >Not Conducted</option>
                        <option value="Market Research has been conducted">Market Research has been conducted</option>
                        </select>
                        <h5>
                            {showSentence(data.section12) && data.section12.market_research !== 'Not Conducted' && `${data.section12.market_research} and the range of products and target market has been identified after that.`}
                            </h5>
                </div>

                    <hr></hr>

                <div className={styles.columnData13}>
                    <label>Primary market:</label>
                            <select onChange={(e) => handleChange("section13", e)} name="primary_market">
                                <option value="">Select Market Type</option>
                        <option value="Local">Local</option>
                        <option value="Regional">Regional</option>
                        <option value="National">National</option>
                        <option value="International">International</option>
                        </select>
                        <h5>
                            {showSentence(data.section13) && `The enterprise shall focus on offering its products/services to ${data.section13.primary_market} markets. `}
                            </h5>
                </div>
               
                    <hr></hr>

                <div className={styles.columnData14}>
                    <label>Processed products:</label>
                        <input type="text" onChange={(e) => handleChange("section14", e)} name="customers" placeholder="Enter customers" />
                        <h5>
                            {showSentence(data.section14) && `Our customers shall include- ${data.section14.customers}`}
                            </h5>
                    </div>
                    <hr></hr>

                <div className={styles.columnData15}>
                    <label>Seasons of high sales:</label>
                            <select onChange={(e) => handleChange("section15", e)} name="seasonality">
                                <option value="">Select Seasons type</option>
                        <option value="Consistant sales across all sales">Consistant sales across all sales</option>
                        <option value="Higher sales in festive season">Higher sales in festive season</option>
                        <option value="Higher sales in copper/cultivation season">Higher sales in copper/cultivation season</option>
                        <option value="High sales in peak seasons">High sales in peak seasons</option>
                        </select>
                        <h5>
                            {showSentence(data.section15) && `The nature of the business is such that we expect ${data.section15.seasonality}.`}
                            </h5>
                    </div>
                    <hr></hr>

                <div className={styles.columnData16}>
                    <label>Competition:</label>
                            <select onChange={(e) => handleChange("section16", e)} name="competition">
                                <option value="">Select Competition type</option>
                        <option value="No Similar goods/service providers in this locality">No Similar goods/service providers in this locality</option>
                        <option value="Only a few similar goods/service providers in this locality">Only a few similar goods/service providers in this locality</option>
                        <option value="Many Similar goods/service providers in this locality">Many Similar goods/service providers in this locality</option>
                        <option value="High sales in peak seasons">High sales in peak seasons</option>
                        </select>
                        <h5>
                            {showSentence(data.section16) && `Regarding competition, there are ${data.section16.competition}.`}
                            </h5>
                </div>
                
                    <hr></hr>

                <div className={styles.columnData17}>
                    <label>List of Suppliers:</label>
                        <input type="text" onChange={(e) => handleChange("section17", e)} name="suppliers" placeholder="Enter suppliers" />
                        <h5>
                            {showSentence(data.section17) && `The enterprise shall procure goods/raw materials from ${data.section17.suppliers}.`}
                            </h5>
                    </div>
                    <hr></hr>

                <div className={styles.columnData18}>
                    <label>Marketing avenues:</label>
                    <select onChange={(e) => handleChange("section18", e)} name="marketing_avenues" multiple>
                        <option value="Distributing of marketing materials">Distributing of marketing materials</option>
                        <option value="Storefront/bussinessbranding">Storefront/bussinessbranding</option>
                        <option value="Seasonal Discounts and Offers">Seasonal Discounts and Offers</option>
                        <option value="Cross promotion">Cross promotion</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Word of Mouth">Word of Mouth</option>
                        </select>
                        <h5>
                            {showSentence(data.section18) && `Our marketing avenues to reach the targeted customers shall include- ${data.section18.marketing_avenues}`}
                            </h5>
                    </div>
                    <hr></hr>

                <h4 className={styles.TargetPara}>
                        {showSentence(data.section12) && data.section12.market_research !== 'Not Conducted' && showSentence(data.section13) && showSentence(data.section14) && showSentence(data.section15) && showSentence(data.section16) && showSentence(data.section17) && showSentence(data.section18) && `${data.section12.market_research} and the range of products and target market has been identified after that.` + `The enterprise shall focus on offering its products/services to ${data.section13.primary_market} markets. ` + `Our customers shall include- ${data.section14.customers}` + `The nature of the business is such that we expect ${data.section15.seasonality}.` + `Regarding competition, there are ${data.section16.competition}.` + `The enterprise shall procure goods/raw materials from ${data.section17.suppliers}.` + `Our marketing avenues to reach the targeted customers shall include- ${data.section18.marketing_avenues}`}
                        </h4>
                        </fieldset>
                    </div>
                    
                
                <div className={styles.ScalingUp}>
                    <fieldset>
                        <legend>SCALING UP POTENTIAL</legend>
                    {/* <h2>Scaling up Potential</h2> */}
                    
                <div className={styles.columnData19}>
                    <label>Avenues of scaling up in future:</label>
                    <select onChange={(e) => handleChange("section19", e)} name="scaleup_potential" multiple>
                        <option value="increasing the variety of product/service offering">increasing the variety of product/service offering</option>
                        <option value="Expanding the current offering to other geographies">GExpanding the current offering to other geographies</option>
                        <option value="Opening more outlets">Opening more outlets</option>
                        <option value="Building value-chain integrations">Building value-chain integrations</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Other allied revenue streams">Other allied revenue streams</option>
                            </select>
                            
                        <h5>
                            {showSentence(data.section19) && `The various foreseeable avenues of scaling up and growing the business in the foreseeable future include- ${data.section19.scaleup_potential}.`}
                            </h5>
                        </div>
                        <hr></hr>
                    <h4 className={styles.ScalePara}>
                        {showSentence(data.section19) && `The various foreseeable avenues of scaling up and growing the business in the foreseeable future include- ${data.section19.scaleup_potential}.`}
                        </h4>
                        </fieldset>
                </div>
                <hr></hr>
            </div>
            

         </form>
  )
}

export default Columns2