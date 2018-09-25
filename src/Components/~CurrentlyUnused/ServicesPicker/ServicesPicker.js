
<Section id="services">
  <Label>
    Requested Service{' '}
    <small>
      <i>(If Applicable)</i>
    </small>
  </Label>

  <ul className="list-service">
    {
      ServiceList.map((Service, Index) => {
        return (
          <li key={Index}>
            <Plus /> {Service}
          </li>
        );
      })
    }
  </ul>
</Section>