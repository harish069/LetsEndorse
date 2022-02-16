import React, { useState } from 'react'
import styles from "./Columns.module.css";

const initValue = {
    name: "",
    bussiness_idea: "",
    bussiness_stage: "",
    age_of_establishment: "",
    primary_product_service_offered: "",
    offered_to: "",
    secondary_product_service_offered: "",
    processed_products: "",
    relevant_experience: "",
    skill_training: "",
    usp: "",
    establishment_type: "",
    business_area: "",
    business_locality: "",
    city: "",
    infra_ownership: "",
    establishment_area: "",
    reason_for_location: "",
    market_research:"",
    primary_market: "",
    customers: "",
    seasonality: "",
    competition: "",
    suppliers: "",
    marketing_avenues: "",
    scaleup_potential:""
}

function Columns() {
    const [data, setData] = useState(initValue);
 
    function showSentence(data)
    {
        // console.log(data, "harish");
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


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setData({ ...data, [name]: value });
        console.log(data);
        
       // {showSentence1(data)&&`${data.name} is looking to ${data.bussiness_stage} their business of ${data.bussiness_idea}.`}
    }

    return (
         <form>
        <div >
            <div className={styles.columnData1}>
                <label>Stage of Bussiness</label>
                    <input type="text" name="name" onChange={handleChange} placeholder='Enter Name' />
                <input type="text" name="bussiness_idea" onChange={handleChange} placeholder='Enter Bussiness Idea'/>
                <select name="bussiness_stage" onChange={handleChange} >
                    <option value="Start-up">Start-up</option>
                    <option value="Scale-up">Scale-up</option>
                    </select>
                    {/* {`Hello ${data.name}`} */}
                     {showSentence(data)&&`${data.name} is looking to ${data.bussiness_stage} their business of ${data.bussiness_idea}.`}
            </div>

                <div className={styles.columnData2}>
                    <label>Age of establishment</label>
                    <input type="number" min="0" max="100" onChange={handleChange} name="age_of_establishment" placeholder="Enter age of establishment" />
                    {showSentence(data)&& `This enterprise has been operational since ${data.age_of_establishment} years and has been serving its customers since then.`}
                </div>
                
                <div className={styles.columnData3}>
                <div className={styles.columnData3a}>
                    <label>Primary Products/Services offfered</label>
                    <input type="text" onChange={handleChange} name="primary_product_service_offered" placeholder="Enter age of establishment" />
                </div>

                <div className={styles.columnData3b}>
                    <label>Offered to</label>
                    <select onChange={handleChange} name="offered_to">
                        <option value="End Customers">End Customers</option>
                        <option value="WholeSalers">WholeSalers</option>
                        <option value="Distributors">Disributors</option>
                        <option value="Retailers">Retailers</option>
                    </select>
                     {showSentence(data) && `This establishment offers products/services like- ${data.primary_product_service_offered} to ${data.offered_to}.`}
                    </div>
                    </div>

                <div className={styles.columnData4}>
                    <label>Secondary Products/Services offfered</label>
                    <input type="text" onChange={handleChange} name="secondary_product_service_offered" placeholder="Enter secondary product service offered" />
                    {showSentence(data)&& `In addition, the enterprise shall also be involved in- ${data.secondary_product_service_offered}`}
                </div>

                <div className={styles.columnData5}>
                    <label>Processed products</label>
                    <input type="text" onChange={handleChange} name="processed_products" placeholder="processed products" />
                    {showSentence(data)&& `Other products of the enterprise shall include- ${data.processed_products}`}
                </div>

                <div className={styles.columnData6}>
                    <label>Years of relevant experience in this field</label>
                    <input type="number" min="0" max="100" onChange={handleChange} name="relevant_experience" placeholder="relevant experience" />
                    {showSentence(data)&& `$name has relevant experience of ${data.relevant_experience} years in this field. .`}
                </div>

                <div className={styles.columnData7}>
                    <label>Skill training</label>
                    <select onChange={handleChange} name="skill_training">
                        <option value="No formal skill training">No formal skill training</option>
                        <option value="Has formal skill training and certifiate">Has formal skill training and certifiate</option>
                    </select>
                     {showSentence(data) && `The entrepreneur ${data.skill_training} in this field of work.`}
                </div>

                <div className={styles.columnData8}>
                    <label>Unique Selling Proposition</label>
                    <select onChange={handleChange} name="usp" multiple>
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
                     {showSentence(data) && `The enterprise is uniquely positioned because of its - ${data.usp}`}
                </div>

                <div className={styles.columnData9}>
                <div className={styles.columnData9a}>
                    <label>Establishment type</label>
                    <select onChange={handleChange} name="establishment_type">
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
                    <label>Name of the area</label>
                    <input type="text" onChange={handleChange} name="business_area" placeholder="business_area" />
                </div>

                <div className={styles.columnData9c}>
                    <label>Locality of business</label>
                    <select onChange={handleChange} name="business_locality">
                        <option value="Urban">Urban</option>
                        <option value="Rural">Rural</option>
                        <option value="Semi-Urban">Semi-Urban</option>
                        <option value="Slum">Slum</option>
                    </select>
                </div>

               <div className={styles.columnData9d}>
                    <label>Ownership of infrastructure</label>
                    <input type="text" name="city" onChange={handleChange} placeholder='Enter City'/>
                    <select onChange={handleChange} name="infra_ownership">
                        <option value="Rented">Rented</option>
                        <option value="Leased">Leased</option>
                        <option value="Self-Owned">Self-Owned</option>
                    </select>
                     {showSentence(data)&& `The ${data.establishment_type} is located in ${data.business_locality} area of ${data.city} in a ${data.infra_ownership} property.`}
                    </div>
                </div>

                 <div className={styles.columnData10}>
                    <label>Establishment area</label> 
                    <input type="number" onChange={handleChange} name="establishment_area" placeholder='Enter establishment area'/>
                    {showSentence(data)&& `The size of the establishment is ${data.establishment_area} sq.ft.`}
                </div>
                
                <div className={styles.columnData11}>
                    <label>Reason for selecting this location</label>
                    <select onChange={handleChange} name="reason_for_location" multiple>
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
                     {showSentence(data) && `This locality is selected because of ${data.reason_for_location}.`}
                </div>
  
                <div className={styles.columnData12}>
                    <label>Locality of business</label>
                    <select onChange={handleChange} name="market_research">
                        <option value="Not Conducted">Not Conducted</option>
                        <option value="Market Research has been conducted">Market Research has been conducted</option>
                    </select>
                    {showSentence(data) && `${data.market_research} and the range of products and target market has been identified after that.`}
                </div>

                <div className={styles.columnData13}>
                    <label>Primary market</label>
                    <select onChange={handleChange} name="primary_market">
                        <option value="Local">Local</option>
                        <option value="Regional">Regional</option>
                        <option value="National">National</option>
                        <option value="International">International</option>
                    </select>
                    {showSentence(data) && `The enterprise shall focus on offering its products/services to ${data.primary_market} markets. `}
                </div>

                <div className={styles.columnData14}>
                    <label>Processed products</label>
                    <input type="text" onChange={handleChange} name="customers" placeholder="Enter customers" />
                    {showSentence(data)&& `Our customers shall include- ${data.customers}`}
                </div>

                <div className={styles.columnData15}>
                    <label>Seasons of high sales</label>
                    <select onChange={handleChange} name="seasonality">
                        <option value="Consistant sales across all sales">Consistant sales across all sales</option>
                        <option value="Higher sales in festive season">Higher sales in festive season</option>
                        <option value="Higher sales in copper/cultivation season">Higher sales in copper/cultivation season</option>
                        <option value="High sales in peak seasons">High sales in peak seasons</option>
                    </select>
                    {showSentence(data) && `The nature of the business is such that we expect ${data.seasonality}.`}
                </div>

                <div className={styles.columnData16}>
                    <label>Competition</label>
                    <select onChange={handleChange} name="competition">
                        <option value="No Similar goods/service providers in this locality">No Similar goods/service providers in this locality</option>
                        <option value="Only a few similar goods/service providers in this locality">Only a few similar goods/service providers in this locality</option>
                        <option value="Many Similar goods/service providers in this locality">Many Similar goods/service providers in this locality</option>
                        <option value="High sales in peak seasons">High sales in peak seasons</option>
                    </select>
                    {showSentence(data) && `Regarding competition, there are ${data.competition}.`}
                </div>

                <div className={styles.columnData17}>
                    <label>List of Suppliers</label>
                    <input type="text" onChange={handleChange} name="suppliers" placeholder="Enter suppliers" />
                    {showSentence(data)&& `The enterprise shall procure goods/raw materials from ${data.suppliers}.`}
                </div>

                <div className={styles.columnData18}>
                    <label>Marketing avenues</label>
                    <select onChange={handleChange} name="marketing_avenues" multiple>
                        <option value="Distributing of marketing materials">Distributing of marketing materials</option>
                        <option value="Storefront/bussinessbranding">Storefront/bussinessbranding</option>
                        <option value="Seasonal Discounts and Offers">Seasonal Discounts and Offers</option>
                        <option value="Cross promotion">Cross promotion</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Word of Mouth">Word of Mouth</option>
                    </select>
                     {showSentence(data) && `Our marketing avenues to reach the targeted customers shall include- ${data.marketing_avenues}`}
                </div>

                <div className={styles.columnData19}>
                    <label>Avenues of scaling up in future</label>
                    <select onChange={handleChange} name="scaleup_potential" multiple>
                        <option value="increasing the variety of product/service offering">increasing the variety of product/service offering</option>
                        <option value="Expanding the current offering to other geographies">GExpanding the current offering to other geographies</option>
                        <option value="Opening more outlets">Opening more outlets</option>
                        <option value="Building value-chain integrations">Building value-chain integrations</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Other allied revenue streams">Other allied revenue streams</option>
                    </select>
                     {showSentence(data) && `The various foreseeable avenues of scaling up and growing the business in the foreseeable future include- ${data.scaleup_potential}.`}
                </div>
        </div>
         </form>
  )
}

export default Columns